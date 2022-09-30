const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// GET route to findAll Posts
router.get('/', (req, res) => {
    console.log('All Posts have been received');
    Post.findAll({
        attributes: ['id', 'post_url', 'title', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(PostInfo => res.json(PostInfo))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'post_url', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(PostInfo => {
            if (!PostInfo) {
                res.status(404).json({ message: 'Post not matching any ID' });
                return;
            }
            res.json(PostInfo);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST request made to create new posts
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_url: req.body.post_url,
        user_id: req.body.user_id
    })
        .then(PostInfo => res.json(PostInfo))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// NOT CURRENTLY WORKING, NEEDS SOME EDITS
router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(PostInfo => {
            if (!PostInfo) {
                res.status(404).json({ message: 'Post not matching any ID' });
                return;
            }
            res.json(PostInfo);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(PostInfo => {
            if (!PostInfo) {
                res.status(404).json({ message: 'Post not matching any ID' });
                return;
            }
            res.json(PostInfo);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;