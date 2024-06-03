
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

    function handleProfileUpdateInfos() {
        const popup = document.querySelector('.pop-up-container')

        popup.classList.toggle('open-popup')
        document.body.classList.toggle('hidden')

    }

    return (
        <section className='adjust-size profile-container'>
            <div className='pop-up-container'>
                <form className='edit-profile-container'>
                    <h1>Enter your data</h1>
                    <label htmlFor="pic-profile">
                        <input type="text" placeholder='Enter URL Profile Image' id='pic-profile' required/>
                    </label>
                    <label htmlFor="new-user-name">
                        <input type="text" placeholder='Enter User Name' id='new-user-name' required/>
                    </label>
                    <label htmlFor="new-background">
                        <input type="text" placeholder='Enter Background URL' id='new-background' required/>
                    </label>
                    <div className='div-buttons'>
                        <button className='blue-button ' onClick={handleProfileUpdateInfos}>Fechar</button>
                        <button className='blue-button' type='submit'>Salvar</button>
                    </div>
                </form>
            </div>
            <div className='grid'>
                <div>'</div>
                <div>'</div>
                <div>'</div>
                <div>'</div>
                <div>'</div>
                <div>'</div>
                <div>'</div>
                <div>'</div>
                <div>'</div>
                <div>'</div>
                <div>'</div>
                <div>'</div>
            </div>
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
                <div className='bg-profile'>
                    <div className='user-info-content'>
                        <figure>
                            <img src="https://wallpapercave.com/wp/wp8498412.jpg" alt="" />
                        </figure>
                        <div className='user-info-data'>
                            <h3>{user.displayName}</h3>
                            <p>{user.email.slice('0', `${user.email.indexOf('@') + 1}`)}</p>
                            <button className='blue-button' onClick={handleProfileUpdateInfos}>Edit profile</button>
                            {/* <p>Conta criada em: {date}</p> */}
                        </div>
                    </div>
                    <div className='gradiente'></div>
                    <img className='bg-image' src='' alt="" />
                </div>
                {/* <div className='outra'></div> */}
                {/* <div className='outra2'></div> */}
            </div>
        </section>


    )

}

export default Profile