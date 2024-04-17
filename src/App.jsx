import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Menu from './components/Menu/Menu'
import Main_card from './components/main-card/Main_card'
import MiniCards from './components/cardsGrid/MiniCards'

import CardContainer from './components/CardContainer/CardContainer'

import HorizontalMenu from './components/horizontalMenu/HorizontalMenu'

// console.log(useHandleMenu)

// console.log(Menu)

function App() {


  return (
    <>
      <BrowserRouter>
        <section className='main-page'>
          <Menu/>
          <section className='content'>
            <HorizontalMenu/>

            <section className='games-container adjust-size' style={{ paddingTop: "15px"}} >
              <Main_card />
              {/* <h4 className='adjust-size' style={{ color: "#fff" }}>Most Popular</h4> */}
              <CardContainer title='Most Popular'/>

            </section>
          </section>
        </section>

      </BrowserRouter>

    </>
  )
}

export default App
