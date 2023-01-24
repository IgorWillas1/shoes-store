const express = require('express');
const path = require('path');

const app = express();

const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/user');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '../public')))

app.use(express.json())

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).render('error-404')
})

app.listen(3002, () => { 
    console.log('Servidor rodando na porta 3002!')
})