import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Menu from './components/Menu/Menu'

import HorizontalMenu from './components/horizontalMenu/HorizontalMenu'

// console.log(useHandleMenu)

// console.log(Menu)

//pages

import Home from './pages/Home/Home'
import LoginPage from './pages/login/LoginPage'

function App() {

  return (
    <>
      <BrowserRouter>
          <Menu />
          <HorizontalMenu />
          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/home' element={<Home />} />

          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
