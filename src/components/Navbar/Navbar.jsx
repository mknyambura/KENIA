import Search from '@mui/icons-material/Search'
import React, { useEffect, useState } from 'react'
import './Navbar.scss'

function Navbar() {
  const [show, setShow] = useState(false)
  const transitionNavbar = () => {
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar)
    return () => {
      window.removeEventListener("scroll", transitionNavbar)
    }
  }, [])
  
  return (
    <div className={`navbar ${show && 'navbar-black'}`}>
      <div className="navbar-content">
        {/* <img className='navbar-logo' src='src/components/Navbar/kE.png' alt='logo'/> */}
        <div className="navbar-logo">
          <h1 id='k'>K</h1>
          <div id='E'>
            <span id='black'><h2>I</h2></span>
            <span id='white'><h2>I</h2></span>
            <span id='red'><h2>I</h2></span>
            <span id='white'><h2>I</h2></span>
            <span id='green'><h2>I</h2></span>
          </div>
          <h1 id='nia'>NIA</h1>
          <div className='navbar-menu'>
            <h2>Home</h2>
            <h2>Series</h2>
            <h2>Movies</h2>
            <h2>Trending</h2>
            <h2>My List</h2>
          </div>
        </div>
        {/* <input type="search" name="" className='navbar-search' placeholder='Search' /> */}
        <img className='navbar-avatar' src='https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg' alt='avatar'/>
      </div>
    </div>
  )
}

export default Navbar