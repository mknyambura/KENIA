// import axios from 'axios'
import React, { useEffect, useState } from 'react'

import requests from '../../requests'
import './Banner.scss'

function Banner() {
  const [movie, setMovie] = useState([])
 
  useEffect(() => {
    fetch(requests.fetchNetflixOriginals)
    .then(response => response.json())
    // .then(data => console.log(data.results))
    .then(data => setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]))
  }, [])
        
  function truncate(string, n){
      return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }}>
        <div className="banner-contents">
            <h1 className="banner-title">{movie?.title || movie?.name || movie?.originale_name}</h1>
            <div className="banner-buttons">
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="banner-fadeBottom"/>

    </header>
  )
}

export default Banner