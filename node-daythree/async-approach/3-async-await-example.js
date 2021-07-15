const axios = require('axios');
const fs = require('fs').promises;

async function printMovies() {
    try {
        let response = await axios.get('https://ghibliapi.herokuapp.com/films');
        response.data.forEach(movie => {
            console.log(`${movie['title']}, ${movie['release_date']}`);
        })
    } catch (error) {
        console.log(`Could not save the Movies to a file : ${error}`);
    }
}

async function saveMovies() {
    try {
        let response = await axios.get('https://ghibliapi.herokuapp.com/films');
        let moviesList = '';
        response.data.forEach(movie => {
            moviesList += `${movie['title']}, ${movie['release_date']}\n`;
        })
        await fs.writeFile('asyncAwaitMovies.csv', moviesList);
    } catch (error) {
        console.log(`Could not save the Movies to a file : ${error}`);
    }
}

printMovies();
saveMovies();