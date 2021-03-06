const omdb_key = '37499bcf'
const OMDB_API_ENDPOINT = `http://www.omdbapi.com/?apikey=${omdb_key}&`

const getMovies = (keyword) => {
    const url = OMDB_API_ENDPOINT + 's=' + keyword;
    return fetch(url)
    .then( (res) => res.json())
    .then( (json) => json.Search)
}

export default getMovies;
