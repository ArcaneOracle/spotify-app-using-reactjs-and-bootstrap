import { useState } from 'react'
import Header from '../header/Header.jsx'
import LandingPage from '../landingPage/LandingPage.jsx'
import SongListing from '../songListing/SongListing.jsx'
import iceNineKillsAlbumCover from '../../assets/images/iceNineKillsAlbumCover.png'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const songs = [
    {
      id: 1,
      title: "The Nature of the Beast",
      artist: "Ice Nine Kills",
      album: "Every Trick in the Book",
      year: 2015,
      icon: "🎧",
      source: iceNineKillsAlbumCover
    },
    {
      id: 2,
      title: "Communion of the Cursed",
      artist: "Ice Nine Kills",
      album: "Every Trick in the Book",
      year: 2015,
      icon: "🎧",
      source: iceNineKillsAlbumCover
    },
    {
      id: 3,
      title: "Bloodbath & Beyond",
      artist: "Ice Nine Kills",
      album: "Every Trick in the Book",
      year: 2015,
      icon: "🎧",
      source: iceNineKillsAlbumCover
    },
    {
      id: 4,
      title: "The Plot Sickens",
      artist: "Ice Nine Kills",
      album: "Every Trick in the Book",
      year: 2015,
      icon: "🎧",
      source: iceNineKillsAlbumCover
    },
    {
      id: 5,
      title: "Star-Crossed Enemies",
      artist: "Ice Nine Kills",
      album: "Every Trick in the Book",
      year: 2015,
      icon: "🎧",
      source: iceNineKillsAlbumCover
    },
    {
      id: 6,
      title: "Me, Myself & Hyde",
      artist: "Ice Nine Kills",
      album: "Every Trick in the Book",
      year: 2015,
      icon: "🎧",
      source: iceNineKillsAlbumCover
    },
    {
      id: 7,
      title: "Alice",
      artist: "Ice Nine Kills",
      album: "Every Trick in the Book",
      year: 2015,
      icon: "🎧",
      source: iceNineKillsAlbumCover
    },
    {
      id: 8,
      title: "The People in the Attic",
      artist: "Ice Nine Kills",
      album: "Every Trick in the Book",
      year: 2015,
      icon: "🎧",
      source: iceNineKillsAlbumCover
    },
    {
      id: 9,
      title: "Tess-Timony",
      artist: "Ice Nine Kills",
      album: "Every Trick in the Book",
      year: 2015,
      icon: "🎧",
      source: iceNineKillsAlbumCover
    },
    {
      id: 10,
      title: "Hell in the Hallways",
      artist: "Ice Nine Kills",
      album: "Every Trick in the Book",
      year: 2015,
      icon: "🎧",
      source: iceNineKillsAlbumCover
    }
  ]

  return (
    <div id="mainDiv">
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <LandingPage />
      {isLoggedIn && <SongListing songs={songs} />}
    </div>
  )
}

export default App