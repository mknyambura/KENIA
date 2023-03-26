import React, { useEffect, useState } from 'react'
import './Row.scss'

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([])
    const image_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
      fetch(fetchUrl)
      .then(response => response.json())
    //   .then(data => console.log(data))
      .then(data => setMovies(data.results))
    }, [fetchUrl])
    
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row-posters">
            {movies.map(
                (movie) => 
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                    <img
                        key={movie.id} 
                        className={`row-poster ${isLargeRow && "row-posterLarge"}`} 
                        src={`${image_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} 
                    />
                )
            )}

        </div>
    </div>
  )
}

export default Row