import React, { useEffect, useState } from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Menu.css"

import useHandleMenu from '../../hooks/useHandleMenu';

import MenuComponents from './MenuComponents/MenuComponents';

function Menu() {

  const {handleMenu, ifToCloseOnClick, isOpen} = useHandleMenu()
  
  handleMenu()

  function handleCloseOnClick(e) {
    if(e.target.tagName === 'A') {
      const menu = document.querySelector('.nav-container')
      menu.classList.remove('open')
      menu.classList.add('close')
    }
  }

  return (
    <header className='header-menu'>
     {ifToCloseOnClick && <nav className={`nav-container ${isOpen? 'open': 'fechado'}`} onClick={(e) => {handleCloseOnClick(e)}}>
        <MenuComponents/>
      </nav>}
     {!ifToCloseOnClick && <nav className={`nav-container ${isOpen? 'open': 'fechado'}`}>
        <MenuComponents/>
      </nav>}
    </header>
  )
}

export default Menu