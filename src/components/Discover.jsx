import React from 'react'
import './styles/Discover.css'
import { useDarkMode } from '../contexts/DarkModeContext'

function Discover() {
  const {isDarkMode} = useDarkMode()
  return (
    <div className={isDarkMode?'discover dark-mode':'discover'}>
        <div className="text">
            <h1>Discover Your Favourite <br /> Anime Merchandise</h1>
            <div className="text2">
                <p>GeekChic offers a wide range of stylish anime clothing for every fan. Shop <br />now and express your love for your favorite shows!</p>
                <button id='shop'>Shop</button>
                <button id={isDarkMode?'explore dark-mode':'explore'}>Explore</button>
            </div>
        </div>
    </div>
  )
}

export default Discover