
// import { app, ref, set } from '../../../firebase/config'

import { useEffect, useState } from 'react'
import { Link, json, useLocation } from 'react-router-dom'

import { useAuthentication } from '../../hooks/useAuthentication'


import "./HorizontalMenu.css"
import useIconMenuClose from '../../hooks/useIconMenuClose'

import { useAuthProvider } from '../../context/AuthContext'

import { useRealTimeDataBase } from '../../hooks/useRealTimeDataBase'

import { getData as dados } from '../../hooks/useData'

function HorizontalMenu() {

    // Autenticação
    const {signOut, auth} = useAuthentication()

    // Obtendo usuario
    const user = useAuthProvider()

    // Lidando com dinamica no menu
    const { handleCloseMenu } = useIconMenuClose()

    // Obtendo infos do perfil do usuário
    const {data} = dados('UserName', 'infosProfile')

    const [profileDataUser, setProfileDataUser] = useState({})

    useEffect(() => {
        setProfileDataUser(data)
    }, [data])


    // console.log(user)
    // console.log(profileDataUser)


    function handleSignOut() {
        signOut(auth)
    }
    
    return (
        <div className='top-menu'>
            <div>
                <span className="material-symbols-outlined menuButton span-icon-2" onClick={(e) => { handleCloseMenu()}}>
                    menu
                </span>
                        <form className='external-form'>
                            <label className='internal-icon-input' data-js='border-label'>
                                <span className="material-symbols-outlined internal-icon">search</span>
                                <input className='input-child' type="text" id='searchInput' placeholder='Search here...' autoComplete='off' />
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
                                    <img src={profileDataUser?.imgProfile} alt="user personal image"/>
                                </>) : (<>
                                    <img src="https://i.pinimg.com/474x/31/ec/2c/31ec2ce212492e600b8de27f38846ed7.jpg" alt="" />
                                </>)}
                            </figure>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {profileDataUser?.profileName ? profileDataUser.profileName : ''}
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