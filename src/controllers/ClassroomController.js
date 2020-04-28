const connection = require('../database/connection')
const crypto = require('crypto');

module.exports = {
    async index(req, res) {
        const classrooms = await connection('classrooms').select('*')
        return res.json(classrooms)
    },

    async create(req, res) {
        const { schedule, start_date, teacher_id } = req.body
        const classroom = await connection('classrooms').where('schedule', schedule).where('start_date', start_date).first()

        if (!classroom) {
            const code = crypto.randomBytes(4).toString('HEX')

            await connection('classrooms').insert({
                code, 
                schedule, 
                start_date, 
                teacher_id, 
            })
        
            return res.status(201).send()
        } else {
            return res.status(400).send()
        }
    }
}