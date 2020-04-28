const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        const teachers = await connection('teachers').select('*')
        return res.json(teachers)
    },

    async disable(req, res) {
        const { id } = req.params
        const teacher = await connection('teachers').where('id', id).first()

        console.log(teacher)

        if (!teacher) {
            return res.status(404).send()
        }

        if(teacher.is_active === 0) {
            return res.status(400).send()
        }

        await connection('teachers').where('id', id).update('is_active', 0)
        return res.status(204).send()
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