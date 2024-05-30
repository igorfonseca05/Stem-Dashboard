
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import './Profile.css'

import { useAuthProvider } from '../../context/AuthContext'
import useMenu from '../../hooks/UseCloseMenu'

function Profile() {

    const user = useAuthProvider()

    const location = useLocation()

    const { handleMenu, isOpen } = useMenu(location.pathname)
    handleMenu()

    //  useEffect(() => {
    //     document.querySelector('.nav-container').style.display = 'block'
    //     document.querySelector('.top-menu').style.display = 'block'
    //  }, [location.pathname])


    // console.log(user)
    // console.log(user.reloadUserInfo.createdAt)

    const stringData = parseInt(user.reloadUserInfo.createdAt)
    const date = new Date(stringData).toLocaleDateString()

    // console.log(date.toLocaleDateString())

    return (
        <section className='adjust-size profile-container'>
            <div className='content-profile'>
                {/* <div className='user-info'>
                    <div className='user-info-content'>
                        <figure>
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-the-character-wearing-headphones-with-an-ear-piercing-in-his-head-image_2919756.jpg" alt="" />
                        </figure>
                        <h3>{user.displayName}</h3>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab pariatur beatae expedita deserunt magnam voluptatum?</p>
                        <p>Conta criada em: {date}</p>
                    </div>
                </div> */}
                <figure className='bg-profile'>
                    <div className='user-info-content'>
                        <figure>
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-the-character-wearing-headphones-with-an-ear-piercing-in-his-head-image_2919756.jpg" alt="" />
                        </figure>
                        <div className='user-info-data'>
                            <h3>{user.displayName}</h3>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab pariatur beatae expedita deserunt magnam voluptatum?</p>
                            <p>Conta criada em: {date}</p>
                        </div>
                    </div>
                    <img className='bg-image' src="img/call.jpg" alt="" />
                </figure>
                <div className='outra'></div>
                <div className='outra2'></div>
            </div>
        </section>


    )

}

export default Profile