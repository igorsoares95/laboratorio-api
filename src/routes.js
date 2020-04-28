const express = require('express')
const TeacherController = require('./controllers/TeacherController')
const ClassroomController = require('./controllers/ClassroomController')
const routes = express.Router()

routes.post('/teachers', TeacherController.create)
routes.get('/teachers', TeacherController.index)
routes.delete('/teachers/:id', TeacherController.disable)

routes.post('/classrooms', ClassroomController.create)
routes.get('/classrooms', ClassroomController.index)

module.exports = routes
