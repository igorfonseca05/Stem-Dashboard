
import { useState } from 'react'

import "./Main_card.css"
import { useFetch } from '../../hooks/useFetch'

function Main_card() {

    const url = 'http://localhost:3000/games'

    const { data } = useFetch(url)

    const date = new Date()

    console.log(date.getHours())

    const random = Math.round(Math.random() * 31)
    // console.log(random)

    // console.log(data)
    const newGame = data?.[random]
    if (!newGame) return

    const { id, name, developer, tags, image_path, price } = newGame
    // console.log(id,name, developer, tags)

    return (
        <div className='main-card-game'>
            <figure>
                <div className='platform-infos'>
                    {/* <span><img src="public\icons\PC.svg" alt="" /></span> */}
                </div>
                <img src={image_path} alt="Sua imagem aqui"/>
                <div className='games-info-mobile'>
                    <div>
                        <h2>{name}</h2>
                        <p>{developer}</p>
                    </div>
                    <button className='blue-button internal-blue-bottom'>Comprar</button>
                </div>
            </figure>
            <div className='games-infos'>
                <div className='div-infos-container'>
                    <h2>{name}</h2>
                    <p>{developer}</p>
                    <div className='tags'>
                        <ul className='tags-container'>
                            {tags.map((tag, index) => (
                                <li key={index}><span className="material-symbols-outlined tagIcon">sell</span>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <button className='blue-button'><span className='showPrice'>{price}</span>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Main_card