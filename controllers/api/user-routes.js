const router = require('express').Router();
const { User } = require('../../models');

// GET route for all users html_ex: /api/users
router.get('/', (req, res) => {

});

// GET route for specific users by ID html_ex: /api/users/2
router.get('/:id', (req, res) => {

});

// POST route for adding users to the web html_ex: /api/users
router.post('/', (req, res) => {
    
});

// PUT route for updating specific users by ID html_ex: /api/users/3
router.put('/:id', (req, res) => {

});

// DELETE route for removing specific users by ID html_ex: /api/users/4
router.delete('/:id', (req, res) => {

});

module.exports = router;