
import { useState } from 'react'

import "./Main_card.css"
import Video from '../videoComponente/Video'

import video from "../../assets/videos/Ghost of Tsushima Director's Cut - Announcement Trailer _ PS5, PS4 (1).mp4"

import YouTubePlayer from '../youtubePlayer/Youtube'

import { useFetch } from '../../hooks/useFetch'

function Main_card() {

    const url = 'http://localhost:3000/games'

    const {data} = useFetch(url)

    // console.log(data?.[0].image_path)

    return (
        <div className='main-card-game'>
            <figure>
                 <img src={data?.[0].image_path} alt="Sua imagem aqui" />
                <div className='games-info-mobile'>
                    <div>
                        <h2>Ghost of Tsushima</h2>
                        <p>Sucker Punch Productions</p>
                    </div>
                    <button className='blue-button internal-blue-bottom'>Comprar</button>
                </div>
            </figure>
            <div className='games-infos'>
                <div className='div-infos-container'>
                    <h2>Ghost of Tsushima</h2>
                    <p>Sucker Punch Productions</p>
                    <div className='tags'>
                        <ul className='tags-container'>
                            <li><span className="material-symbols-outlined">sell</span>Luta</li>
                            <li><span className="material-symbols-outlined">sell</span>Estratégia</li>
                            <li><span className="material-symbols-outlined">sell</span>Oriente</li>
                            <li><span className="material-symbols-outlined">sell</span>Ação</li>
                        </ul>
                    </div>
                    <button className='blue-button'>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Main_card