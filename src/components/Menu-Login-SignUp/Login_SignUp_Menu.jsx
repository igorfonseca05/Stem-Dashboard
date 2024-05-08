import React from 'react'

import "./Login_SignUp_Menu.css"

import { Link } from 'react-router-dom'

function Login_SignUp_Menu({handleShowMenu}) {
  return (
    <nav className="home-menu">
        <Link to={'/'} onClick={() => handleShowMenu()}>
            <img src="\icons\home.svg" alt="" />
        </Link>
    </nav>
  )
}

export default Login_SignUp_Menu