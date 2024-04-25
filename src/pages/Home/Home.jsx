
import React, { useState } from 'react'

import CardContainer from '../../components/CardContainer/CardContainer'
import Main_card from '../../components/main-card/Main_card'

import HorizontalMenu from '../../components/horizontalMenu/HorizontalMenu'

import { useFetch } from '../../hooks/useFetch'

import "./Home.css"

function Home() {

    const { data } = useFetch("http://localhost:3000/games")

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


    function createObj () {
        return data?.filter((item, index) => item.category === [...categories][index] )
    }

    const arr = createObj()

    // console.log(arr)

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
        <section className='games-container adjust-size' style={{ paddingTop: "15px" }} >
            <Main_card />
            {
                [...categories].map((category, index) => (
                    <CardContainer title={category} dados={games_list_one} key={index} />
                ))
            }

        </section>
        // <section className='content'>
        //     {/* <HorizontalMenu /> */}

        // </section>

    )
}

export default Home