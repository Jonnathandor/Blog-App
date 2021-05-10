const API_URL = "http://localhost:3000/api/articles";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getArticles();
}

const getArticles = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).then(data => {
        buildArticles(data);
    })
}

const buildArticles = (blogArticles) => {
    //console.log(blogArticles);
    let articleContent = '';

    for(article of blogArticles){
        const articleDate = new Date(parseInt(article.added_date)).toDateString();
        let articleImage = `${API_BASE_URL}${article.post_image}`;
        const articleLink = `./article.html?id=${article.id}`;
        articleContent += `
        <a class="article-link" href="${articleLink}">
            <div class="article">
                <div class="article-image" style="background-image: url(${articleImage})"></div>
                <div class="article-content">
                    <h6 class="article-date">${articleDate}</h6>
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-text">${article.content}</p>
                </div>
            </div>
        </a>
        `;

        document.querySelector('.blog-articles').innerHTML= articleContent;
    }
}