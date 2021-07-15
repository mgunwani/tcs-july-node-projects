var request = require('request');

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    if (error) throw error;
    if (response.statusCode != 200) {
        console.log(`Expected Status Code 200 but received ${response.statusCode}`);
        return;
    }
    var movies = JSON.parse(body);
    movies.forEach(movie => {
        console.log(`${movie['title']}, ${movie['release_date']}`);
    })
})