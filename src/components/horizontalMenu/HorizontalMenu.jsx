
// import { app, ref, set } from '../../../firebase/config'

import { useEffect, useState } from 'react'
import { Link, json, useLocation } from 'react-router-dom'

import { useAuthentication } from '../../hooks/useAuthentication'


import "./HorizontalMenu.css"
import useIconMenuClose from '../../hooks/useIconMenuClose'

import { useAuthProvider } from '../../context/AuthContext'

import { useRealTimeDataBase } from '../../hooks/useRealTimeDataBase'

function HorizontalMenu() {

    const [realTimeprofileInfos, setrealTimeProfileInfos] = useState({})

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
    
    creatingBorderOnClick()
    
    
function gettingDataRealTime (infos) {
    setrealTimeProfileInfos(infos)
}

useEffect(() => getData(gettingDataRealTime, 'UserName/'), [])
    

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
                            <div className='online-ball'></div>
                                {user.photoURL? (<>
                                    <img src={realTimeprofileInfos.profile_picture} alt="user personal image"/>
                                </>) : (<>
                                    <img src="https://i.pinimg.com/474x/31/ec/2c/31ec2ce212492e600b8de27f38846ed7.jpg" alt="" />
                                </>)}
                            </figure>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {realTimeprofileInfos.profileName}
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