const apiKey = '5a5cf4c4cee84823ad858399b7420255';
const apiUrl = ('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5a5cf4c4cee84823ad858399b7420255');

const newsResults = document.querySelector('#newsResults');

async function fetchNews() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Populate news articles into HTML
    let newsHtml = '';
    // Display first article as a featured article
    const featuredArticle = data.articles[0];
    newsHtml += `
      <div class="col-md-12 mb-3">
        <div class="card">
          <img src="${featuredArticle.urlToImage}" class="card-img-top" alt="${featuredArticle.title}">
          <div class="card-body">
            <h5 class="card-title">${featuredArticle.title}</h5>
            <p class="card-text">${featuredArticle.description}</p>
            <a href="${featuredArticle.url}" target="_blank" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    `;
    // Display remaining articles in a grid layout
    for (let i = 1; i < 4; i++) {
      const article = data.articles[i];
      newsHtml += `
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description}</p>
              <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      `;
    }
    newsResults.innerHTML = newsHtml;

  } catch (error) {
    console.log(error);
  }
}

fetchNews();

