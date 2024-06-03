
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'


import './Profile.css'

import { useAuthProvider } from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication'
import useMenu from '../../hooks/UseCloseMenu'

function Profile() {

    const user = useAuthProvider()

    // console.log(user)

    const location = useLocation()
    const { updateInfos: updateProfile, error, loading, success, onAuthStateChanged } = useAuthentication()

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

    function handleProfileUpdateInfos(e) {
        const popup = document.querySelector('.pop-up-container')
        const form = document.querySelector('.edit-profile-form')

        popup.classList.toggle('open-popup')
        document.body.classList.toggle('hidden')

        if (e.target.tagName === 'A') {
            form.reset()
        }

    }

    function updateInfos(e) {
        e.preventDefault()

        const newProfileImage = e.target.newProfileImage.value
        const newUserName = e.target.newUserName.value

        updateProfile(newUserName, newProfileImage)
    }


    return (
        <section className='adjust-size profile-container'>
            <div className='pop-up-container'>
                <form className='edit-profile-form' onSubmit={(e) => updateInfos(e)}>
                    <h2>Enter your data</h2>
                    <label htmlFor="newProfileImage">
                        <input type="text" placeholder='Enter URL Profile Image' id='newProfileImage'/>
                    </label>
                    <label htmlFor="newUserName">
                        <input type="text" placeholder='Enter User Name' id='newUserName'/>
                    </label>
                    <label htmlFor="new-background">
                        <input type="file" name="" id="" />
                    </label>
                    <div className='div-buttons'>
                        {!loading ? (
                            <>
                                <a className='blue-button button-disabled' onClick={handleProfileUpdateInfos} disabled={loading}>Fechar</a>
                                <button className='blue-button button-disabled' type='submit' disabled={loading}>Salvar</button>
                            </>

                        ) : (
                            <>
                                <a className='blue-button' onClick={handleProfileUpdateInfos}>Fechar</a>
                                <button className='blue-button' type='submit'>Salvar</button>
                            </>
                        )
                        }
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
                <div className='bg-profile'>
                    <div className='user-info-content'>
                        <figure>
                            <img src={user.photoURL} alt="" />
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