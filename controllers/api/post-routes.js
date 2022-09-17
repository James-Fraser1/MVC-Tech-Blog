const router = require('express').Router();
const { Post, User } = require('../../models');

// GET route to findAll Posts
router.get('/', (req, res) => {
    console.log('All Users have been received');
    Post.findAll({
        attributes: ['id', 'post_url', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;