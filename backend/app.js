const express = require('express');
const app = express();
const Article = require('./api/models/article');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${getExt(file.mimetype)}`)
    }
})

const upload = multer({storage: storage});

const getExt = (mimeType) => {
    switch(mimeType){
        case 'image/png':
            return '.png';
        case 'image/jpeg':
            return '.jpeg';
    }
}

const article = new Article();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

// Converts to json the payloads in the body
app.use(express.json());

// REFACTOR: 
// the routers could be in their own module: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
// this file is getting messy

// This middleware makes the uploads folders public
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.get('/api/articles', (req, res) => {
    res.status(200).send(article.getArticles());
})

app.get('/api/article/:article_id', (req, res) => {
    console.log(req.params.article_id);
    let found = article.getArticle(req.params.article_id);

    if(found.length !== 0){
        res.status(200).send(found);
    } else {
        res.status(404).send('Not Found');
    }
    
})

app.post('/api/article', upload.single('post_image'), (req, res) => {
    console.log(req.body)
    const newArticle = {
        "id": `${Date.now()}`,
        "title": req.body.title,
        "content": req.body.content,
        "post_image": req.file.path,
        "added_date": `${Date.now()}`
    }

    article.addArticle(newArticle);
    res.status(201).send(newArticle);

    
})

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
})