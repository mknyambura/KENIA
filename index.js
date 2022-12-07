const API_KEY = 'api_key=ba66f272ad77e72300d02b7cf1eb08ef';
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY


function getAllMovies(){
    fetch(API_URL)
    .then(resp => resp.json())
    .then(data => console.log(data))
}
