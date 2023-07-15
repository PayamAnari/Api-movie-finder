let movieNameRef = document.getElementById('movie-name');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');
let quoteContainer = document.getElementById('quote-container');

function Movie(movieName) {
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class='msg'>Please enter a movie or series name</h3>`;
  } else {
    getMovie(movieName)
      .then((movieData) => {
        result.innerHTML = movieData.html;
      })
      .catch(() => {
        result.innerHTML = `<h3 class='msg'>Error Occurred</h3>`;
      });
  }
}

function Quote() {
  getQuote()
    .then((quote) => {
      quoteContainer.innerHTML = `<p>" ${quote} "</p>`;
    })
    .catch(() => {
      quoteContainer.innerHTML = `<p>Error getting quote</p>`;
    });
}

function init() {
  searchBtn.addEventListener('click', () => {
    const movieName = movieNameRef.value;
    Movie(movieName);
  });

  window.addEventListener('load', () => {
    Movie('');
    Quote();
  });
}

init();
