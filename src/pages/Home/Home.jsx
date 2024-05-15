
import React, { useState } from 'react'

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

    const { handleMenu } = useMenu(location.pathname)
    handleMenu()

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

    // console.log(res)

    const games_list_one = [
        { game: "F11 22", tag: 'Racing', url: 'f1.jpg' },
        { game: "Call of Duty: Modern Warfare", tag: 'Action', url: 'call.jpg' },
        { game: "Fifa 22", tag: 'Sports', url: 'fifa-22.webp' },
    ]

    const games_list_two = [
        { game: "Grand Theft Auto V", tag: 'Crime', url: 'gta.webp' },
        { game: "Death Stranding", tag: 'Action', url: 'dead.jpg' },
        { game: "Red Dead Redemption 2", tag: 'Open World', url: 'red.jfif' },
    ]

    const games_list_three = [
        { game: "Rust", tag: 'Survival', url: 'rust.jpg' },
        { game: "PUBG: BATTLEGROUNDS", tag: 'Multiplayer', url: 'battle.jpg' },
        { game: "Destiny 2", tag: 'Sci-Fi', url: 'destiny.jpg' },
    ]

    return (
        <section className='adjust-size ' style={{ paddingTop: "15px" }} >
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