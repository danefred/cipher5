//JavaScript code to fetch news data

fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5a5cf4c4cee84823ad858399b7420255')
.then(response => response.json())
.then(data => {
  // Get the news content container element
  const newsContent = document.querySelector('#news-content');
  
  // Loop through the first three news articles and create HTML elements to display them
  data.articles.slice(0, 3).forEach(article => {
    const newsCard = document.createElement('div');
    newsCard.className = 'col-md-4 mb-4';
    newsCard.innerHTML = `
      <div class="card">
        <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
        <div class="card-body">
          <h5 class="card-title">${article.title}</h5>
          <p class="card-text">${article.description}</p>
          <a href="${article.url}" class="btn btn-primary">Read More</a>
        </div>
      </div>
    `;
    
    // Add the news card to the news content container
    newsContent.appendChild(newsCard);
  });
})
.catch(error => console.error(error));

