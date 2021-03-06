import { Request, Response } from 'express'

import database from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

class ClassesController {
  public async index(request: Request, response: Response) {
    const classes = await database('classes')
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])

    return response.json(classes)
  }

  public async show(request: Request, response: Response) {
    const { week_day, subject, time } = request.query

    if (!week_day || !subject || !time) {
      return response.status(400).json({
        error: 'Missing filters to search classes',
      })
    }

    const timeInMinutes = convertHourToMinutes(time as string)

    const classes = await database('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject as string)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])

    return response.json(classes)
  }

  public async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body

    const trx = await database.transaction()

    try {
      const insertedUserIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      })

      const user_id = insertedUserIds[0]

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      })

      const class_id = insertedClassesIds[0]

      const classSchedule = schedule.map(
        ({ week_day, from, to }: ScheduleItem) => ({
          class_id,
          week_day,
          from: convertHourToMinutes(from),
          to: convertHourToMinutes(to),
        }),
      )

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()

      return response.status(201).send()
    } catch (err) {
      await trx.rollback()

      return response.status(400).json({
        error: 'Unexpected error while creating new class',
      })
    }
  }
}

export default new ClassesController()
