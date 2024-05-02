import React, { useEffect, useState } from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import useHandleMenu from '../../hooks/useHandleMenu'


import "./Menu.css"

import MenuComponents from './MenuComponents/MenuComponents';

function Menu() {

  const [ifToCloseOnClick, setIfToCloseOnClick] = useState(false)

  const location = useLocation()

    useEffect(() => {

      function debounce(func, delay) {
        let timeoutId;
    
        return function() {
            const context = this;
            const args = arguments;
    
            clearTimeout(timeoutId);
    
            timeoutId = setTimeout(function() {
                func.apply(context, args);
            }, delay);
        };
    }
      
    function resize () {
      const menu = document.querySelector('.nav-container')
      const between1199And1360 = window.innerWidth >= 1199 || window.innerWidth === 1360

      if (between1199And1360) {
        menu.classList.remove('close')
        menu.classList.add('open')
        setIfToCloseOnClick(false)

      } else if (window.innerWidth <= 1199 || window.innerWidth <= 500) {
        menu.classList.remove('open')
        menu.classList.add('close')
        setIfToCloseOnClick(true)
      }
    }

    window.addEventListener('resize', debounce(resize, 1))

  }, [])

  function handleCloseOnClick(e) {
    if(e.target.tagName === 'A') {
      const menu = document.querySelector('.nav-container')
      menu.classList.remove('open')
      menu.classList.add('close')
    }
  }

  return (
    <header className='header-menu'>
     {ifToCloseOnClick && <nav className='nav-container open' onClick={(e) => {handleCloseOnClick(e)}}>
        <MenuComponents/>
      </nav>}
     {!ifToCloseOnClick && <nav className='nav-container open'>
        <MenuComponents/>
      </nav>}
    </header>
  )
}

export default Menu