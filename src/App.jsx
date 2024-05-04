import { useState } from 'react'

import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'

import './App.css'
import Menu from './components/Menu/Menu'

import HorizontalMenu from './components/horizontalMenu/HorizontalMenu'

// console.log(useHandleMenu)

// console.log(Menu)

//pages

import Home from './pages/Home/Home'
import LoginPage from './pages/login/LoginPage'
import SignUp from './pages/SignUp/SignUp'
import AboutUs from './pages/AboutUs/AboutUs'
import Updates from './pages/updates/Updates'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <HorizontalMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/updates' element={<Updates />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
