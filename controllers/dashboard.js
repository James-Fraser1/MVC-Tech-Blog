const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log('Dashboard route properly redirected with login authorization')
    res.render('dashboard');
});

module.exports = router;