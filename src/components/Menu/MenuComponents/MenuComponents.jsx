
import './MenuComponents.css'

// Recursos React
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Componentes
import DropDown from '../../../components/dropdown/DropDown';

// Hooks
import useHandleMenu from '../../../hooks/useHandleMenu'
import useIconMenuClose from '../../../hooks/useIconMenuClose';

// Verificando estado de autenticação para alterar links
import { useAuthProvider } from '../../../context/AuthContext';

function MenuComponents() {

    const user = useAuthProvider()

    const { handleCloseMenu } = useIconMenuClose()
    
    return (
        <>
            <div className='logo'>
                <span className="material-symbols-outlined span-icon" onClick={(e) => { handleCloseMenu() }}>
                    menu
                </span>
                <div>
                    <img src="img/pngegg (4).png" alt="" />
                    <h2>STEAM</h2>
                </div>
            </div>
            <div className='menu-container'>
                <ul className='sideBar-ul'>
                    {!user &&
                        <>
                            <li>
                                <Link to={'/'} className='main-link-menu' href="#">
                                    <span className="material-symbols-outlined">
                                        home
                                    </span>
                                    Home
                                </Link>
                            </li>
                            <DropDown
                                key='dropdown1'
                                title="Store"
                                links={['Feadured', 'Categories', 'Discovery']}
                                icon={"shopping_cart"} />
                            <li>
                                <Link to={'/aboutUs'} className='main-link-menu' href="#">
                                    <span className="material-symbols-outlined">
                                        groups
                                    </span>
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to={'/updates'} className='main-link-menu' href="#">
                                    <span className="material-symbols-outlined">
                                        news
                                    </span>
                                    Updates
                                </Link>
                            </li>
                        </>}


                    {user &&
                        <>
                            <li>
                                <Link to={'/'} className='main-link-menu' href="#">
                                    <span className="material-symbols-outlined">
                                        home
                                    </span>
                                    Home
                                </Link>
                            </li>
                            <DropDown
                                key='dropdown1'
                                title="Store"
                                links={['Feadured', 'Categories', 'Discovery']}
                                icon={"shopping_cart"} />
                            <li>
                                <Link className='main-link-menu' href="#"><span className="material-symbols-outlined">
                                    auto_awesome_mosaic
                                </span>Library</Link>
                            </li>
                            <li>
                                <Link className='main-link-menu' href="#">
                                    <span className="material-symbols-outlined">
                                        group
                                    </span>Friends</Link>
                            </li>
                            <li>
                                <Link className='main-link-menu' href="#">
                                    <span className="material-symbols-outlined">
                                        diversity_3
                                    </span>
                                    Community</Link>
                            </li>
                        </>}
                </ul>
                {user &&
                    <ul className='sideBar-ul-bottom'>
                        <DropDown
                            key='dropdown1'
                            title="Settings"
                            links={['Properties', 'Categories', 'Discovery']}
                            icon={"settings"} />
                    </ul>
                }
                {!user &&
                    <ul className='logins-button'>
                        <li>
                            <Link to={"/login"} className='SingIn-link'>SIGN IN</Link>
                        </li>
                        <li>
                            <Link to={"/SignUp"} className='blue-button SingUp-link'>SIGN UP</Link>
                        </li>
                    </ul>
                }

            </div>
        </>
    )
}

export default MenuComponents