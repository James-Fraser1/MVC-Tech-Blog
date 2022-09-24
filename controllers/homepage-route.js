const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post } = require('../models');

router.get('/', (req, res) => {
    res.render('login')
});

router.get('/login', (req, res) => {
    console.log('Login route properly redirected!')
    res.redirect('/')
});

router.get('/dashboard', async (req, res) => {
    const postData = await Post.findAll();
    const posts = postData.map((post) => post.get({plain: true})) 
        res.render('dashboard', {
            layouts: "main",
            posts
        })
});

router.get('/register', (req, res) => {
    console.log('Register route properly redirected!')
    res.render('register')
});

module.exports = router;