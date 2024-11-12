import { postsArray } from ' posts.js '

const blogArticlesArea = document.getElementById('blog-articles')

function renderArticles() {

    let articles = ''

    postsArray.forEach(article => {
        articles += `
        <h2>${article.title}</h2>`
    });

    blogArticlesArea.innerHTML = articles
}



renderArticles()