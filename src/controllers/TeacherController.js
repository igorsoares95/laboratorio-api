const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        const ongs = await connection('teachers').select('*')

        return res.json(ongs)
    },

    async disable(req, res) {
        const { id } = req.params

        const teacher = await connection('teachers').where('id', id).first()

        if (teacher) {
            if (teacher.is_active == true) {
                await connection('teachers').where('id', id).update('is_active', false)
                const teacherUpdated = await connection('teachers').where('id', id).first()
                return res.json(teacherUpdated)
            } else {
                return res.status(400).json( { error: 'user is already inactive' })
            }
        } else {
            return res.status(404).json( { error: 'user does not exists' })
        }
    },

    async create(req, res) {
        const { name, whatsapp, email, email_zoom, cpf } = req.body
        const teacher = await connection('teachers').where('cpf', cpf).first()

        if (teacher) {
            return res.status(400).json( { error: 'user already exists' })
        } else {
            const is_active = true
            const password = cpf
        
            await connection('teachers').insert({
                name, 
                whatsapp, 
                email, 
                email_zoom, 
                cpf,
                password,
                is_active,
            })
        
            return res.json({ email })
        }
    }
}