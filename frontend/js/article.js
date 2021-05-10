

const API_URL = "http://localhost:3000/api/article/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getArticle();
}

const getArticleIdParam = () => {
    // this will give us the full url
    const query = window.location.search;

    // pulls out the params from the query
    const urlParams = new URLSearchParams(query);
    return urlParams.get('id');
}

const getArticle = () => {
    const articleId = getArticleIdParam();

    fetch(`${API_URL}${articleId}`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).then(data => {
        buildArticle(data);
        console.log(data);
    })
}

const buildArticle = (article) => {
    let articleContent = '';
    const articleDate = new Date(parseInt(article.added_date)).toDateString();
    let articleImage = `${API_BASE_URL}${article.post_image}`;
    // const articleLink = `./article.html?id=${article.id}`;
    // articleContent += `
    // <a class="article-link" href="${articleLink}">
    //     <div class="article">
    //         <div class="article-image" style="background-image: url(${articleImage})"></div>
    //         <div class="article-content">
    //             <h6 class="article-date">${articleDate}</h6>
    //             <h3 class="article-title">${article.title}</h3>
    //             <p class="article-text">${article.content}</p>
    //         </div>
    //     </div>
    // </a>
    // `;

    articleContent += `
        <div id="individual-article-title">${article.title}</div>
        <div id="individual-article-date">${articleDate}</div>
        <div id="individual-article-content">${article.content}</div>
    `;

    document.querySelector('.individual-article').innerHTML= articleContent;
    document.querySelector('header').style.backgroundImage = `url(${articleImage})`
}