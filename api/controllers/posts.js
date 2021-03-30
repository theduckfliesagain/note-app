const express = require('express');
const router = express.Router();

const Post = require('../models/post')

router.get('/:title-:id', async (req, res) => {
    try {
        const params = {title: req.params.title, id: req.params.id};
        // Get post 
        const post = Post.find(params);
        res.status(200).json(post);
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = router