import React from 'react'

import { NavLink } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import useHandleMenu from '../../hooks/useHandleMenu'


import "./Menu.css"
import DropDown from '../dropdown/DropDown';

function Menu() {

  function openMenu() {
    const resize = () => {
      const menu = document.querySelector('.nav-container')
  
      const between1199And1200 = window.innerWidth >= 1199 && window.innerWidth <= 1200
      // console.log(window.innerWidth )
      if (window.innerWidth >= 1199 || window.innerWidth === 1360 ) {
        menu.classList.remove('close')
        menu.classList.add('open')  
        return
        // window.removeEventListener('resize', resize)
      }

      if(window.innerWidth <= 1999 || window.innerWidth <= 500) {
        // menu.classList.remove('open')
        menu.classList.remove('open')
        // console.log('o')
      }

      
    }
    
    window.addEventListener('resize', resize)
    
  }

  openMenu()

  const handleCloseMenu = useHandleMenu()

  return (
    <header>
      <nav className='nav-container open'>
        <div className='logo'>
          <span className="material-symbols-outlined span-icon" onClick={(e) => { handleCloseMenu()}}>
            menu
          </span>
          <div>
            <img src="pngegg (4).png" alt="" />
            <h2>STEAM</h2>
          </div>
        </div>
        <ul className='sideBar-ul'>
          <li>
            <a className='main-link-menu' href="#">
              <span className="material-symbols-outlined">
                home
              </span>
              Home
            </a>
          </li>
          <DropDown
            title="Store"
            link1={'Feadured'}
            link2={'Categories'}
            link3={'Discovery'}
            icon={"shopping_cart"} />

          <li>
            <a className='main-link-menu' href="#"><span className="material-symbols-outlined">
              auto_awesome_mosaic
            </span>Library</a>
          </li>

          <li>
            <a className='main-link-menu' href="#">
              <span className="material-symbols-outlined">
                group
              </span>Friends</a>
          </li>

          <li>
            <a className='main-link-menu' href="#">
              <span className="material-symbols-outlined">
                diversity_3
              </span>
              Community</a>
          </li>

          <DropDown
            title={'Settings'}
            link1={'24'}
            link2={'s'}
            link3={'Dvery'}
            icon={"settings"}
            className="settings"
          />
        </ul>

      </nav>
    </header>
  )
}

export default Menu