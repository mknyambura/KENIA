const API_KEY = "ba66f272ad77e72300d02b7cf1eb08ef";
const base_url =  "https://api.themoviedb.org/3"

const requests = {
    
    fetchNetflixOriginals: `${base_url}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrendingNow: `${base_url}/discover/movie?api_key=${API_KEY}&language=en-US`,
    // fetchTrendingMovies: `${base_url}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    // fetchTrendingTVShows: `${base_url}/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimationMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    // fetchCrimeMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchDocumentaries: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchDramaMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchFamiliMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchFantasyMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=14`,
    // fetchHistoryMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchHorrorMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchMusicMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    fetchMysteryMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchFamilyMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchRomanceMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchSciFiMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchTVMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    fetchThrillerMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchWarMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    // fetchWesternMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=37`,
}

export default requests;

// https://api.themoviedb.org/3/discover/movie?api_key=ba66f272ad77e72300d02b7cf1eb08ef&with_genres=37