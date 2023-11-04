import React, { useContext } from 'react'
import logo from '../images/logo.png'
import search from '../images/search.svg'
import searchDark from '../images/Search-Dark.svg'
import dark from '../images/light.svg'
import light from '../images/Vector.svg'
import person from '../images/charm_person.svg'
import personDark from '../images/Person-Dark.svg'
import cart from '../images/cart.svg'
import cartDark from '../images/Cart-Dark.svg'
import drawer from '../images/Menu.png'
import {Link} from 'react-router-dom'
import './styles/Navbar.css'
import { useDarkMode } from '../contexts/DarkModeContext'

function Navbar() {

    const {isDarkMode, toggleDarkMode} = useDarkMode()

  return (
    <nav className={isDarkMode?'nav dark-mode':'nav'}>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/info">Info</Link></li>
                <li><Link to="/new_arival">New Arival</Link></li>
                <li><Link to='/productform'>Add Your Product</Link></li>
            </ul>
        </div>
        <div className="icons">
            <ul>
                <li><Link to='/search'><img src={isDarkMode?searchDark:search} id='search'/></Link></li>
                <li><button><img src={isDarkMode?personDark:person} id='person'/></button></li>
                <li><button onClick={toggleDarkMode}><img src={isDarkMode?dark:light}/>
                </button></li>
                <li><button><img src={isDarkMode?cartDark:cart} id='cart'/></button></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar