import React from 'react'
import './styles/Section2.css'
import { useDarkMode } from '../contexts/DarkModeContext'

function Section2() {
  const {isDarkMode} = useDarkMode()
  return (
  <div className={isDarkMode?'Section2 dark-mode':'Section2'}>
      <p>Stylish</p>
        <h2>Top Anime Series at <br />GeekChic</h2>
        <p>Discover the most popular anime series that GeekChic clothing has to offer. From classic <br /> favorites to the latest releases. we've got you covered.</p>
        <ul>
            <li><button>Shop</button></li>
            <li><a href=''>View all {'>'}</a></li>
        </ul>
  </div>

  )
}

export default Section2