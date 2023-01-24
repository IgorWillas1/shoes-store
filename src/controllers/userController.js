const db = require('../database/models')

const controller = {
    login: (req, res) => {
        res.render('login');
    },

    cadastro: (req, res) => {
        res.render('cadastro')
    },

    cadastrarUsuario: async (req, res) => {
        const {nome, sobrenome, email, senha, nascimento, numero} = req.body;

        await db.Usuario.create({
            nome,
            sobrenome,
            email,
            senha,
            data_nascimento: nascimento,
            numero,
        });

        return res,redirect('/')
    }
};

module.exports = controller;