import React from 'react'
import requests from '../../requests'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Row from '../Row/Row'
import './HomeScreen.scss'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* Navbar */}
        <Navbar/>
        {/* Banner */}
        <Banner/>
        {/* Rows */}
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrendingNow}
          isLargeRow
        />
        <Row
          title="Animation Movies"
          fetchUrl={requests.fetchAnimationMovies}
          isLargeRow
        />
        <Row
          title="Sci-Fi"
          fetchUrl={requests.fetchSciFiMovies}
          isLargeRow
        />
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          isLargeRow
        />
        <Row
          title="War Movies"
          fetchUrl={requests.fetchWarMovies}
          isLargeRow
        />
        <Row
          title="Thriller Movies"
          fetchUrl={requests.fetchThrillerMovies}
          isLargeRow
        />
        <Row
          title="Fantasy Movies"
          fetchUrl={requests.fetchFantasyMovies}
          isLargeRow
        />
        <Row
          title="Documentaries "
          fetchUrl={requests.fetchDocumentaries}
          isLargeRow
        />
        <Row
          title="Drama Movies "
          fetchUrl={requests.fetchDramaMovies}
          isLargeRow
        />
        <Row
          title="Comedy Movies "
          fetchUrl={requests.fetchComedyMovies}
          isLargeRow
        />
        <Row
          title="Romance Movies "
          fetchUrl={requests.fetchRomanceMovies}
          isLargeRow
        />
        <Row
          title="Horror Movies "
          fetchUrl={requests.fetchHorrorMovies}
          isLargeRow
        />

    </div>
  )
}

export default HomeScreen