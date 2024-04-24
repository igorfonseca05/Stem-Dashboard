
import { useState } from 'react'

import "./Main_card.css"
import Video from '../videoComponente/Video'

import video from "../../assets/videos/Ghost of Tsushima Director's Cut - Announcement Trailer _ PS5, PS4 (1).mp4"

import YouTubePlayer from '../youtubePlayer/Youtube'

function Main_card() {
    let animateButton

    const [showVideo, setShowVideo] = useState(false)
    const [showAlert, setShowAlert] = useState(false)


    function handleAnimation(action = 'saiu') {
        animateButton = document.querySelector('.play-trailer')
        const div = document.querySelector('.description')

        if (action === 'entrou') {
            animateButton.classList.toggle('play-trailerAnimate')
            div.classList.toggle('play-trailerAnimate')

        } else {
            animateButton.classList.toggle('play-trailerAnimate')
            div.classList.toggle('play-trailerAnimate')
        }
    }

    function handleHideButton() {
        animateButton.style.opacity = 0
        setShowAlert(true)
        setShowAlert(false)

        setTimeout(() => {
            setShowVideo(true)
        }, 1000)
    }

    return (
        <div className='main-card-game'>
            <figure
                onMouseEnter={(e) => { handleAnimation('entrou') }}
                onMouseLeave={(e) => { handleAnimation() }}
            >
                <div className='description'>
                    <p className='text-ghost'>"Ghost of Tsushima" é um jogo de ação ambientado no Japão feudal, onde os jogadores assumem o papel de Jin Sakai, enfrentando invasores mongóis. Com escolhas morais entre o código samurai e métodos furtivos, o jogo oferece combate e exploração em um mundo aberto vasto, com missões secundárias e segredos para descobrir. Com uma trilha sonora envolvente e gráficos deslumbrantes, é uma experiência imersiva do período histórico.</p>
                </div>

                {!showVideo && <img src="game12.png" alt="Sua imagem aqui" />}

                <button className='play-trailer' onClick={(e) => { handleHideButton() }} >
                    <span className='material-symbols-outlined'>play_circle</span> Ver Trailer
                </button>

                {/* {showVideo && <YouTubePlayer/>} */}
                {!showAlert && <p className='wait-message'>Aguarde...</p>}

                {showVideo && <Video />}


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