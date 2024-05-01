import React, { useState } from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import useHandleMenu from '../../hooks/useHandleMenu'


import "./Menu.css"
import DropDown from '../dropdown/DropDown';

function Menu() {

  const [user, setUser] = useState(false)

  const location = useLocation()

  function openMenu() {
    const resize = () => {
      const menu = document.querySelector('.nav-container')

      const between1199And1360 = window.innerWidth >= 1199 || window.innerWidth === 1360
      if (between1199And1360) {
        
        // if(location.pathname === '/SignUp') return
        menu.classList.remove('close')
        menu.classList.add('open')
        return
      }

      if (window.innerWidth <= 1999 || window.innerWidth <= 500) {
        menu.classList.remove('open')
      }
    }

    window.addEventListener('resize', resize)

  }

  openMenu()

  const {handleCloseMenu} = useHandleMenu()

  return (
    <header className='header-menu'>
      <nav className='nav-container open'>
        <div className='logo'>
          <span className="material-symbols-outlined span-icon" onClick={(e) => { handleCloseMenu() }}>
            menu
          </span>
          <div>
            <img src="img/pngegg (4).png" alt="" />
            <h2>STEAM</h2>
          </div>
        </div>
        <div className='menu-container'>
          <ul className='sideBar-ul'>
            {!user &&
              <>
                <li>
                  <Link className='main-link-menu' href="#">
                    <span className="material-symbols-outlined">
                      home
                    </span>
                    Home
                  </Link>
                </li>
                <DropDown
                  key='dropdown1'
                  title="Store"
                  links={['Feadured', 'Categories', 'Discovery']}
                  icon={"shopping_cart"} />
                <li>
                  <Link to={'/aboutUs'} className='main-link-menu' href="#">
                    <span className="material-symbols-outlined">
                      groups
                    </span>
                    About us
                  </Link>
                </li>
                <li>
                  <Link className='main-link-menu' href="#">
                    <span className="material-symbols-outlined">
                      news
                    </span>
                    Updates
                  </Link>
                </li>
              </>}


            {user &&
              <>
                <li>
                  <Link className='main-link-menu' href="#">
                    <span className="material-symbols-outlined">
                      home
                    </span>
                    Home
                  </Link>
                </li>
                <DropDown
                  key='dropdown1'
                  title="Store"
                  links={['Feadured', 'Categories', 'Discovery']}
                  icon={"shopping_cart"} />
                <li>
                  <Link className='main-link-menu' href="#"><span className="material-symbols-outlined">
                    auto_awesome_mosaic
                  </span>Library</Link>
                </li>
                <li>
                  <Link className='main-link-menu' href="#">
                    <span className="material-symbols-outlined">
                      group
                    </span>Friends</Link>
                </li>
                <li>
                  <Link className='main-link-menu' href="#">
                    <span className="material-symbols-outlined">
                      diversity_3
                    </span>
                    Community</Link>
                </li>
              </>}
          </ul>
          {user &&
            <ul className='sideBar-ul-bottom'>
              <DropDown
                key='dropdown1'
                title="Settings"
                links={['Properties', 'Categories', 'Discovery']}
                icon={"settings"} />
            </ul>
          }
          {!user &&
            <ul className='logins-button'>
              <li>
                <Link to={"/login"}>Sign In</Link>
              </li>
              {/* <li>
                  <Link to={"/SignUp"} className='white-button'>Sign Up</Link>
                </li> */}
              <li>
                <svg className='svgButton' width={200} height={50}>
                  <Link to={"/SignUp"} className='white-button'>
                    <rect x="10" y="2" fill="transparent" rx="10px"></rect>
                    <text x="67" y="31" fontSize="18" fill="white">Sign-Up</text>
                    Sign Up
                  </Link>
                </svg>

              </li>
            </ul>

          }

        </div>

      </nav>
    </header>
  )
}

export default Menu