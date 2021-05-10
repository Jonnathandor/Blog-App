//const articles  = require('../../data.json')
const PATH = './data.json';
const fs = require('fs');

class Article {
    getArticles(){
        return this.readArticles();
    }

    getArticle(articleId){
        const articles = this.readArticles();
        let article = articles.filter(article => article.id == articleId)
        return article[0];
    }

    addArticle(newArticle){
        const currentArticles = this.readArticles();
        currentArticles.unshift(newArticle)
        this.saveArticle(currentArticles)
    }

    readArticles(){
        //return articles;
        return JSON.parse(fs.readFileSync(PATH));
    }

    saveArticle(article){
        article = JSON.stringify(article);
        fs.writeFileSync(PATH, article);
    }
}

module.exports = Article