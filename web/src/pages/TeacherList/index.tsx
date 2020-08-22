import React, { useState, FormEvent, useEffect } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import api from '../../services/api'

import { PageTeacherList, SearchTeachers } from './styles'

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState(0)
  const [time, setTime] = useState('')

  const [teachers, setTeachers] = useState([])

  async function searchTeachers(e: FormEvent) {
    e.preventDefault()

    const { data } = await api.get('classes/filtereds', {
      params: {
        subject,
        week_day,
        time,
      },
    })

    setTeachers(data)
  }

  useEffect(() => {
    api.get('classes').then(response => {
      setTeachers(response.data)
    })
  }, [])

  return (
    <PageTeacherList className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Portugues', label: 'Portugues' },
              { value: 'Matematica', label: 'Matematica' },
              { value: 'Historia', label: 'Historia' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Biologia', label: 'Biologia' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => {
              setWeekDay(Number(e.target.value))
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => {
              setTime(e.target.value)
            }}
          />

          <button type="submit">Buscar</button>
        </SearchTeachers>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </PageTeacherList>
  )
}

export default TeacherList
