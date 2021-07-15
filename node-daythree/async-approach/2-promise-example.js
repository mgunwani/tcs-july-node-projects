const axios = require('axios');
const fs = require('fs').promises;

// axios.get('https://ghibliapi.herokuapp.com/films')
// .then((response) => {
//     var moviesList = '';
//     response.data.forEach(movie => {
//         console.log(`${movie['title']}, ${movie['release_date']}`);
//     });
// }) 
// .catch((error) => {
//     console.log(`Could not save the Movies to a file : ${error}`);
// })


axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        var moviesList = '';
        response.data.forEach(movie => {
            moviesList += `${movie['title']}, ${movie['release_date']}\n`;
        });
        return fs.writeFile('promiseMovies.csv', moviesList);
    })
    .then(() => {
        console.log('Movies saved to File promiseMovies.txt.')
    })
    .catch((error) => {
        console.log(`Could not save the Movies to a file : ${error}`);
    })


