const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors('*'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title: 'Test', message: 'Welcome' })
});

module.exports = app;