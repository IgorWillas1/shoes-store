const controller = {
    login: (req, res) => {
        res.render('login');
    },

    cadastro: (req, res) => {
        res.render('cadastro')
    }
};

module.exports = controller;