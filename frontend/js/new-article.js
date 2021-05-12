const API_URL = "http://localhost:3000/api/article";

const submitNewArticle = () => {
    const title = document.getElementById('form-article-title').value;
    const content = document.getElementById('form-article-content').value; 
    const image = document.getElementById('form-article-image');

    let data = new FormData();
    data.append("post_image", image.files[0]);
    data.append("title", title);
    data.append("content", content);

    fetch(API_URL, {
        method: 'POST',
        body: data
    }).then(() => {
        console.log('is done...')
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000)
    })
}