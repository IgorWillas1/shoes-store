const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController') 

router.get('/login', userController.login)
router.get('/cadastro', userController.cadastro)
router.post('/cadastro', userController.cadastrarUsuario)

module.exports = router;