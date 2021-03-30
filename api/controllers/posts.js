const express = require('express');
const router = express.Router();

const Post = require('../models/post')

router.get('/', async (req, res) => {
    try {
        res.send("Posts")
    } catch (error) {
        throw new Error(error);
    }
})

// show route
router.get('/:path', async (req, res) => {
    try {
        // Get post 
        const post = await Post.findById(req.params.path);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json(error);
    }
})
// create route
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router