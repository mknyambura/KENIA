// api key 
const api = 'api_key=ba66f272ad77e72300d02b7cf1eb08ef';
// base url of the website 
const base_url = 'https://api.themoviedb.org/3'
// url 
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + api
// images url 
const image_url = "https://image.tmdb.org/t/p/original/"
// search movie 
// const search_url = base_url + '/search/movie?' + api

// const form = document.querySelector('form#search')
// form.addEventListener('submit')


// request for movies data
const requests = {
    // fetchGenre: `${base_url}/genre/movie/list?api_key=${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchPopular: `${base_url}/discover/movie?sort_by=popularity.desc&${api}`,
    fetchTrendingMovies: `${base_url}/trending/movie/week?${api}&language=en-US`,
    fetchTrendingTVShows: `${base_url}/trending/tv/week?${api}&language=en-US`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchAdventureMovies: `${base_url}/discover/movie?${api}&with_genres=12`,
    fetchAnimationMovies: `${base_url}/discover/movie?${api}&with_genres=16`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchCrimeMovies: `${base_url}/discover/movie?${api}&with_genres=80`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
    fetchDramaMovies: `${base_url}/discover/movie?${api}&with_genres=18`,
    fetchFamilyMovies: `${base_url}/discover/movie?${api}&with_genres=10751`,
    fetchFantasyMovies: `${base_url}/discover/movie?${api}&with_genres=14`,
    fetchHistoryMovies: `${base_url}/discover/movie?${api}&with_genres=36`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchMusicMovies: `${base_url}/discover/movie?${api}&with_genres=10402`,
    fetchMysteryMovies: `${base_url}/discover/movie?${api}&with_genres=9648`,
    fetchFamiliMovies: `${base_url}/discover/movie?${api}&with_genres=99`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchSciFiMovies: `${base_url}/discover/movie?${api}&with_genres=878`,
    fetchTVMovies: `${base_url}/discover/movie?${api}&with_genres=10770`,
    fetchThrillerMovies: `${base_url}/discover/movie?${api}&with_genres=53`,
    fetchWarMovies: `${base_url}/discover/movie?${api}&with_genres=10752`,
    fetchWesternMovies: `${base_url}/discover/movie?${api}&with_genres=37`,
};

// Truncates the string 
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}

// fetch(requests.fetchGenre)
// .then((resp) => resp.json())
// .then((data) => {
//     console.log(data.results)
// })


fetch(requests.fetchNetflixOriginals)
.then((resp) => resp.json())
.then((data) => {
    console.log(data.results)
    // during every refresh, the movie will change
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log(setMovie)
    var banner = document.querySelector('#banner');
    var bannerTitle = document.querySelector('#banner-title');
    var bannerDescription = document.querySelector('#banner-description');
    banner.style.backgroundImage = 'url(' + image_url + setMovie.backdrop_path + ')';
    bannerDescription.innerText = truncate(setMovie.overview, 150);
    bannerTitle.innerText = setMovie.name
})

// Netflix Originals
fetch(requests.fetchNetflixOriginals)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    row.classList.add('netflixrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'NETFLIX ORIGINALS';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster-large';

        var m = movie.name.replace(/\m+/g,'')
        poster.id = m;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    });
});

// Popular Movies
fetch(requests.fetchPopular)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    row.classList.add('popularrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Trending Now';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster-large';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Trending Movies
fetch(requests.fetchTrendingMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('trendingmoviesrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Trending Movies';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster-large';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Trending TV Shows
fetch(requests.fetchTrendingTVShows)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('trendingtvshowsrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Trending TV Shows';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster-large';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Action Movies
fetch(requests.fetchActionMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('actionrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Action';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Adventure Movies
fetch(requests.fetchAdventureMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('adventurerow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Adventure';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Animation Movies
fetch(requests.fetchAnimationMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('animationrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Animation';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Comedy Movies
fetch(requests.fetchComedyMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('comedyrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Comedy';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Crime Movies
fetch(requests.fetchCrimeMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('crimerow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Crime';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Documentaries
fetch(requests.fetchDocumentaries)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('documentariesrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Documentaries';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Drama Movies
fetch(requests.fetchDramaMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('dramarow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Drama';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Family Movies
fetch(requests.fetchFamilyMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('familyrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Family';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Fantasy Movies
fetch(requests.fetchFantasyMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('fantasyrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Fantasy';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// History Movies
fetch(requests.fetchHistoryMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('historyrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'History';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Horror
fetch(requests.fetchHorrorMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('horrorrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Horror';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Music Movies
fetch(requests.fetchMusicMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('musicrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Music';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Mystery Movies
fetch(requests.fetchMysteryMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('mysteryrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Mystery';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Romance
fetch(requests.fetchRomanceMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('romancerow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Romance';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Science Fiction
fetch(requests.fetchSciFiMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('scifirow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Sci-Fi';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Thriller
fetch(requests.fetchThrillerMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('thrillerrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Thriller';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// War
fetch(requests.fetchWarMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('warrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'War';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})

// Western
fetch(requests.fetchWesternMovies)
.then((resp) => resp.json())
.then((data) => {
    const headRow = document.querySelector("#head-row");
    const row = document.createElement('div')
    row.className = 'row';
    // row.classList.add('westernrow')
    headRow.appendChild(row);
    
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.innerText = 'Western';
    row.appendChild(title)

    const rowPosters = document.createElement('div')
    rowPosters.className = 'row-posters';
    row.appendChild(rowPosters)

    data.results.forEach(movie => {
        const poster = document.createElement('img')
        poster.className = 'row-poster';

        var s = movie.id;
        poster.id = s;
        poster.src = image_url + movie.poster_path;
        rowPosters.appendChild(poster)
    })
})