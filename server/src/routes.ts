import { Router } from 'express'

import ClassesController from './controllers/Classes'
import ConnectionsController from './controllers/Connections'

const routes = Router()

routes.get('/classes', ClassesController.index)
routes.get('/classes/filtereds', ClassesController.show)
routes.post('/classes', ClassesController.create)

routes.get('/connections', ConnectionsController.index)
routes.post('/connections', ConnectionsController.create)

export default routes
