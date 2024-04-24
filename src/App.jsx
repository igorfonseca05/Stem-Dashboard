import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Menu from './components/Menu/Menu'

import HorizontalMenu from './components/horizontalMenu/HorizontalMenu'

// console.log(useHandleMenu)

// console.log(Menu)

//pages

import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
          <Menu />
          <HorizontalMenu />
          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
