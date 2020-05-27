const omdb_key = process.env.OMDB_KEY
const OMDB_API_ENDPOINT = `http://www.omdbapi.com/?apikey=${omdb_key}&`

const getMovieTitle = (title) => {
    const url = OMDB_API_ENDPOINT + 't=' + title;
    return fetch(url)
    .then( (res) => res.json())
    .then( (json) => json)
}

export default getMovieTitle;
