
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


import "./HorizontalMenu.css"
import useHandleMenu from '../../hooks/useHandleMenu'

function HorizontalMenu() {


    const { handleCloseMenu } = useHandleMenu()

    const [user, setUser] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    
    function handleBorder() {
        const label = document.querySelector('[data-js="border-label"]')

        if (isFocused) {
            label.style.border = '2px solid #e6e6e6'
            return
        }
        label ? label.style.border = 'none' : ''
    }

    handleBorder()

    return (
        <div className='top-menu'>
            <div>
                <span className="material-symbols-outlined menuButton span-icon-2" onClick={(e) => { handleCloseMenu() }}>
                    menu
                </span>
                        <form className='external-form'>
                            <label data-js='border-label'
                                onFocus={(e) => setIsFocused(true)}
                                onBlur={(e) => setIsFocused(false)}>
                                <span className="material-symbols-outlined">search</span>
                                <input type="text" id='searchInput' placeholder='Search here...' autoComplete='off' />
                            </label>
                        </form>
                        <div className='shop-notification-icons-container'>
                            <span className='material-symbols-outlined'>notifications</span>
                            <span className='material-symbols-outlined'>shopping_cart</span>
                        </div>
                {user &&
                        <div className='top-menu-user'>
                            <figure>
                                <img src="https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2023/02/14175424/woody-1.jpg" alt="" />
                            </figure>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Igor Fonseca
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                                    <li><a className="dropdown-item" href="#">Lançamentos</a></li>
                                    <li><a className="dropdown-item" href="#">Configurações</a></li>
                                    <li className='li-form-container'>
                                        <form className='internal-form'>
                                            <label>
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                <input type="text" placeholder='Search here...' />
                                            </label>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                
                }
            </div>

        </div>
    )
}

export default HorizontalMenu