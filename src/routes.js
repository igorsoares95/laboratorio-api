const express = require('express')
const TeacherController = require('./controllers/TeacherController')
const routes = express.Router()

routes.post('/teachers', TeacherController.create)
routes.get('/teachers', TeacherController.index)
routes.delete('/teachers/:id', TeacherController.disable)

module.exports = routes
