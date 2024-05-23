
import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import CardContainer from '../../components/CardContainer/CardContainer'
import Main_card from '../../components/main-card/Main_card'

import HorizontalMenu from '../../components/horizontalMenu/HorizontalMenu'

import { useFetch } from '../../hooks/useFetch'

import useMenu from '../../hooks/UseCloseMenu'

import "./Home.css"
import { useLocation } from 'react-router-dom'

function Home() {

    const { data } = useFetch("http://localhost:3000/games")

    const location = useLocation()

    const { handleMenu, isOpen } = useMenu(location.pathname)
     handleMenu()

    //  useEffect(() => {
    //     document.querySelector('.nav-container').style.display = 'block'
    //     document.querySelector('.top-menu').style.display = 'block'
    //  }, [location.pathname])

    // console.log(data)

    let categories;

    // Nessa função estou obtendo valores distintos de categorias
    function getCategories() {
        categories = new Set()

        data?.map(({ category }) => {
            categories.add(category)
        })
    }
    getCategories()

    // console.log([...categories])

    let res = []

    function createObj () {
       [...categories].forEach(name => {
        let newArray = data?.filter((item) => item.category === name)
        res.push(newArray)
       })

    }

    createObj()

    return (
        <section className='adjust-size ' style={{ paddingTop: "15px"}} >
         <div className='games-content'>
            <Main_card />
            {
                [...categories].map((category, index) => (
                    <CardContainer title={category} dados={res[index]} key={index} />
                ))
            }
            </div>
        </section>
    )
}

export default Home