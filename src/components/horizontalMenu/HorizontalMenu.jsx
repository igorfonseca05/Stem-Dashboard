
// import { app, ref, set } from '../../../firebase/config'

import { useEffect, useState } from 'react'
import { Link, json, useLocation } from 'react-router-dom'

import { useAuthentication } from '../../hooks/useAuthentication'


import "./HorizontalMenu.css"
import useIconMenuClose from '../../hooks/useIconMenuClose'

import { useAuthProvider } from '../../context/AuthContext'

import { useRealTimeDataBase } from '../../hooks/useRealTimeDataBase'

function HorizontalMenu() {

    const {signOut, auth} = useAuthentication()
    const user = useAuthProvider()
    const { handleCloseMenu } = useIconMenuClose()
    const {setData, getData} = useRealTimeDataBase()

    // console.log(user)
    
    const [isFocused, setIsFocused] = useState(false)

    const [color, setColor] = useState("#808080")

    
    function creatingBorderOnClick() {
        const label = document.querySelector('[data-js="border-label"]')

        if (isFocused) {
            label.style.border = '2px solid #e6e6e6'
            return
        }

            label ? label.style.border = 'none' : ''
     }

    function handleSignOut() {
        signOut(auth)
    }
    
    let counter = 0
    function handleChangeColor(e) {
        // Custom hook de acesso a base de dados
        const colors = ['#00A7C3', '#00BC5D', '#F38500', '#FF453A']
        
        counter === (colors.length - 1) ? counter = 0 : counter++
        e.currentTarget.style.backgroundColor = colors[counter]

        console.log(colors[counter])

        localStorage.setItem('color', `${colors[counter]}`)

        // setColor(colors[counter])
        //Salvando preferência do usuário na base de dados
        setTimeout(() => {
            setData(colors[counter], user?.uid)
        }, 3000)
    }

    creatingBorderOnClick()
    
    
   useEffect(() => {
    function getColor(colorData) {
        if(localStorage.getItem('color')) {
            setColor(localStorage.getItem('color'))
            return
        }
        
        setColor(colorData?.color)
    }

    getData(getColor, user?.uid)
}, [])
    

    return (
        <div className='top-menu'>
            <div>
                <span className="material-symbols-outlined menuButton span-icon-2" onClick={(e) => { handleCloseMenu()}}>
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
                                {user.photoURL? (<>
                                    <img src={user.PhotoURL} alt="user personal image" />
                                </>) : (<>
                                    <div style={{backgroundColor: `${color}`}} className='profile-image-letter' onClick={handleChangeColor}>
                                        <h2>{user.displayName?.slice(0,1)}</h2>
                                    </div>
                                </>)}
                            </figure>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.displayName}
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/profile'} className="dropdown-item" href="#">Perfil</Link></li>
                                    <li><Link to={''} className="dropdown-item" href="#">Lançamentos</Link></li>
                                    <li><Link to={''} className="dropdown-item" href="#">Configurações</Link></li>
                                    <li><Link to={''} className="dropdown-item" href="#" onClick={() => handleSignOut()}>Sair</Link></li>
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