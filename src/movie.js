let OMDB_KEY = '96082af0';

function getMovie(movieName) {
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${OMDB_KEY}`;

  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      if (data.Response == 'True') {
        return {
          html: `
            <div class='info'>
              <img src=${data.Poster} class='poster'>
              <div>
                <h2>${data.Title}</h2>
                <div class='rating'>
                  <img src='../assets/star-icon.svg'>
                  <h4>${data.imdbRating}</h4>
                </div>
                <div class='details'>
                  <span>${data.Rated}</span>
                  <span>${data.Year}</span>
                  <span>${data.Runtime}</span>
                </div>
                <div class='genre'>
                  <div>${data.Genre.split(',').join('</div><div>')}</div>
                </div>
              </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>${data.Actors}</h3>
          `,
        };
      } else {
        return {
          html: `<h3 class='msg'>${data.Error}</h3>`,
        };
      }
    })
    .catch(() => {
      return {
        html: `<h3 class='msg'>Error Occurred</h3>`,
      };
    });
}
