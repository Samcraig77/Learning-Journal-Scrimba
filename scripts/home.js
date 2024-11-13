import { postsArray } from './posts.js'

const blogArticlesArea = document.getElementById('blog-articles')

document.addEventListener("click", e => {
    [...e.target.classList].includes('more-btn') ? e.target.parentElement.innerHTML = getFullContent(e.target) : 
    [...e.target.classList].includes('less-btn') ? e.target.parentElement.innerHTML = controlArticleLength(getCurrentPost(e.target)) : ''
})

function renderArticles() {

    let articles = ''

    postsArray.forEach(article => {
        articles += `
        <h2 class="article-title">${article.title}</h2>
        <div id="${article.uuid}">
            <p class="article-content">${controlArticleLength(article)}</p>
        </div>
        `
    });

    blogArticlesArea.innerHTML = articles
}

function controlArticleLength(article) {

   return article.content.length > 200 ? article.content.slice(0, 400) + `... <button class="more-btn" data-post-id="${article.uuid}"> More</button>` : article.content
}

function getFullContent(p) {

    
    const currentPostContent = getCurrentPost(p).content

    return `<p>${currentPostContent}</p><br><button class="less-btn" data-post-id="${p.dataset.postId}">Show Less</button>`
}

function getCurrentPost(e) {
    return postsArray.filter(post => e.dataset.postId === post.uuid)[0]
}
    
renderArticles()