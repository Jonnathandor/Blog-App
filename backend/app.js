const express = require('express');
const app = express();
const Article = require('./api/models/article');
const article = new Article();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

// This middleware makes the uploads folders public
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.get('/api/articles', (req, res) => {
    res.status(200).send(article.getArticles());
})

app.get('/api/article/:article_id', (req, res) => {
    
    let found = article.getArticle(req.params.article_id);

    if(found.length !== 0){
        res.status(200).send(found);
    } else {
        res.status(404).send("Not Found");
    }
    
})

app.post('/api/articles', (req, res) => {
    
})

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
})