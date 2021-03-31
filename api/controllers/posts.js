// const express = require('express');
// const router = express.Router();

const Post = require('../models/post')

async function index (req, res) {
    try {
        res.send("Posts")
    } catch (error) {
        throw new Error(error);
    }
}

// show route
async function show (req, res){
    try {
        // Get post 
        const post = await Post.findById(req.params.path);
        // res.status(200).json(post);
        res.status(200).render('post', post);
    } catch (error) {
        res.status(404).json(error);
    }
}

// create route
async function create (req, res, next) {
    try {
        const post = await Post.create(req.body);
        console.log(post);
        res.redirect(`/posts/${post.path}`)
        next();
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {index, show, create}