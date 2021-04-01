const Post = require('../models/post')

// index route
async function index (req, res) {
    try {
        res.status(200).render('index', {title: 'brain.dump'})
    } catch (error) {
        res.status(404).render('error', {error});
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
        res.status(404).render('error', {error});
    }
}

// create route
async function create (req, res, next) {
    try {
        const post = await Post.create(req.body);
        console.log(post);
        res.redirect(`/${post.path}`)
        next();
    } catch (error) {
        res.status(500).render('error', {error});
    }
}

module.exports = {index, show, create}