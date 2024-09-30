let newsOutput = document.querySelector("#news-output");
let btn = document.querySelector("#get-news");
let url = 'https://newsapi.org/v2/everything?q=apple&from=2024-09-29&to=2024-09-29&sortBy=popularity&apiKey=9c11fe41d56e44a9aae47bb31aeebaa0';
btn.addEventListener("click", getNews);

function getNews() {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            newsOutput.innerHTML = ''; 
            data.articles.forEach((article) => {
                let newsItem = `
                    <div class="news-item">
                        <h3>${article.title}</h3>
                        <p>${article.description || 'No description available.'}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                    </div>
                `;
                newsOutput.innerHTML += newsItem;
            });
            console.log(data.articles);
        })
        .catch((error) => {
            console.error('Error fetching news:', error);
            newsOutput.innerText = 'Failed to load news. Please try again later.';
        });
}
