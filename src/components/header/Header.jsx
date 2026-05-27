import spotifyLogo from '../../assets/images/spotifyLogo.svg'
import './Header.css'
import { useState, useEffect } from 'react'

function Header({ isLoggedIn, setIsLoggedIn }) {

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <div className="headingDiv">
      <div className="spotifyAndLogo">
        <img className="spotifyLogo" src={ spotifyLogo } alt="Spotify Logo"/>
        <h1 className="spotifyGreen spotifyHeading">Spotify</h1>
      </div>
      <button className="loggedInOrNot" onClick={handleLogin}>{isLoggedIn ? "Logged In" : "Log In Here"}</button>
    </div>
  )
}

export default Header;