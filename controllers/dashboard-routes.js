const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('sequelize');


module.exports = router;