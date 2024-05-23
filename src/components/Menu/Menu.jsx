import React, { useEffect, useState } from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Menu.css"

import useHandleMenu from '../../hooks/useHandleMenu';
import useMenu from '../../hooks/UseCloseMenu';

import MenuComponents from './MenuComponents/MenuComponents';

function Menu({show}) {

  // const location = useLocation()

  // const {handleMenu: showMenu} = useMenu(location.pathname)

  // showMenu()

  const [changeClass, setChangeClass] = useState(null)

  const {handleMenu, closeMenuWithClickOnItem, isOpen} = useHandleMenu()
  
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
      }, 200)
    }
  }, [isOpen])

  // console.log('oi')
  
  function closeOnClick(e) {
    if(e.target.tagName === 'A') {
      const menu = document.querySelector('.nav-container')
      menu.classList.remove('open')
      menu.classList.add('close')
 
      setTimeout(() => {menu.classList.remove('close')}, 200)
    }
  }

  return (
    <header className='header-menu'>
     {closeMenuWithClickOnItem && <nav className={`nav-container ${changeClass}`} onClick={(e) => {closeOnClick(e)}}>
        <MenuComponents/>
        {/* {console.log('oi')} */}
      </nav>}
     {!closeMenuWithClickOnItem && <nav className={`nav-container ${changeClass}`}>
        <MenuComponents/>
        {/* {console.log('oi')} */}
      </nav>}
    </header>
  )
}

export default Menu