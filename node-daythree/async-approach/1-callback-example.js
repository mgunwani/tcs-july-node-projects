var request = require('request');
var fs = require('fs');

// request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
//     if (error) throw error;
//     if (response.statusCode != 200) {
//         console.log(`Expected Status Code 200 but received ${response.statusCode}`);
//         return;
//     }
//     var movies = JSON.parse(body);
//     movies.forEach(movie => {
//         console.log(`${movie['title']}, ${movie['release_date']}`);
//     })
// })

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    if (error) throw error;
    if (response.statusCode != 200) {
        console.log(`Expected Status Code 200 but received ${response.statusCode}`);
        return;
    }
    var movies = JSON.parse(body);
    var moviesList = '';
    movies.forEach(movie => {
        moviesList += `${movie['title']}, ${movie['release_date']}\n`;
    });

    fs.writeFile('callbackMovies.txt', moviesList, (err) => {
        if(err) {
            console.error(`Could not save the Movies to a file : ${error}`);
            return;
        }
        console.log('Movies saved to callbackMovies.txt');
    })
})