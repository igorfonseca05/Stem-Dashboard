import React, { useEffect, useState } from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Menu.css"

import useHandleMenu from '../../hooks/useHandleMenu';

import MenuComponents from './MenuComponents/MenuComponents';

function Menu() {

  const [changeClass, setChangeClass] = useState(null)

  const {handleMenu, ifToCloseOnClick, isOpen} = useHandleMenu('open')
  
  handleMenu()

  useEffect(() => {
    if(isOpen) {
      // This class add da open Meny transition
      setChangeClass('open')
    } else {
      // This class add the transition moviment
      setChangeClass('close')
  
      // This setTimeout is used to change the state's 
      // variable after the transition close to be finished
      setTimeout(() => {
        //This class unmount the Menu from DOM
        setChangeClass('fechado')
      }, 500)
    }
  }, [isOpen])

  
  function handleCloseOnClick(e) {
    if(e.target.tagName === 'A') {
      const menu = document.querySelector('.nav-container')
      menu.classList.remove('open')
      menu.classList.add('close')
    }
  }

  return (
    <header className='header-menu'>
     {ifToCloseOnClick && <nav className={`nav-container ${changeClass}`} onClick={(e) => {handleCloseOnClick(e)}}>
        <MenuComponents/>
      </nav>}
     {!ifToCloseOnClick && <nav className={`nav-container ${changeClass}`}>
        <MenuComponents/>
      </nav>}
    </header>
  )
}

export default Menu