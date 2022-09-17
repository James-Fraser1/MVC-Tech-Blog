const router = require('express').Router();
const sequelize = require('../config/loginconnection');
const { User } = require('../models');

router.get('/', (req, res) => {
    res.render('login')
});

router.get('/login', (req, res) => {
    console.log('Login route properly redirected!')
    res.redirect('/')
});

router.get('/dashboard', (req, res) => {
        res.render('dashboard')
});

router.get('/register', (req, res) => {
    console.log('Register route properly redirected!')
    res.render('register')
});

module.exports = router;