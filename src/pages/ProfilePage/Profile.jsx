
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


import './Profile.css'

import { useAuthProvider } from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication'
import useMenu from '../../hooks/UseCloseMenu'

import { useRealTimeDataBase } from '../../hooks/useRealTimeDataBase'

import { getData as dados } from '../../hooks/useData'

function Profile() {

    const user = useAuthProvider()

    const {
        updateInfos: updateProfile,
        error,
        loading,
        success } = useAuthentication()


    const { data } = dados('UserName', 'infosProfile')

    const [profileDataUser, setProfileDataUser] = useState({})

    useEffect(() => {
        setProfileDataUser(data)
    }, [data])


    // Controlando abertura e fechamento do menu
    const location = useLocation()
    const { handleMenu, isOpen } = useMenu(location.pathname)
    handleMenu()

    // Obtendo data de criação da conta
    const stringData = parseInt(user.reloadUserInfo.createdAt)
    const date = new Date(stringData).toLocaleDateString()

    // PopUp para atualizar informações pessoais
    function handleProfileUpdateInfos(e) {
        const popup = document.querySelector('.pop-up-container')
        const form = document.querySelector('.edit-profile-form')

        popup.classList.toggle('open-popup')
        document.body.classList.toggle('hidden')

        if (e.target.tagName === 'A') {
            form.reset()
        }

    }

    // Salvar dados do formulario na base de dados
    function updateInfos(e) {
        e.preventDefault()

        const newProfileImage = e.target.newProfileImage.value
        const newUserName = e.target.newUserName.value
        const backgroundImg = e.target.backgroundImg.value

        updateProfile(newUserName, newProfileImage, backgroundImg)
    }

    // console.log(profileDataUser)

    return (
        <section className='adjust-size profile-container'>
            <div className='pop-up-container'>
                <form className='edit-profile-form' onSubmit={(e) => updateInfos(e)}>
                    <h2>Enter your data</h2>
                    <label htmlFor="newProfileImage" className='input-profile internal-icon-input'>
                        <input className='input-child' type="text" placeholder='Enter URL Profile Image' id='newProfileImage' />
                    </label>
                    <label htmlFor="newUserName" className='input-profile internal-icon-input'>
                        <span className="material-symbols-outlined icon">person</span>
                        <input className='input-child' type="text" placeholder='Enter User Name' id='newUserName' />
                    </label>
                    <label htmlFor="backgroundImg" className='input-profile internal-icon-input'>
                        <input className='input-child' type="URL" name="" id="backgroundImg" placeholder='Enter URL background image' />
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
                <div className='profileContainer'>
                    <div className='user-info-content'>
                        <figure>
                            {user.photoURL ? <>
                                <img src={profileDataUser?.imgProfile} alt="" />
                            </> : <>
                                <img src="https://i.pinimg.com/474x/31/ec/2c/31ec2ce212492e600b8de27f38846ed7.jpg" alt="" />
                            </>
                            }
                        </figure>
                        <div className='user-info-data'>
                            <h3>{profileDataUser?.profileName}</h3>
                            <p>{user.email.slice('0', `${user.email.indexOf('@') + 1}`)}</p>
                            <button className='blue-button' onClick={handleProfileUpdateInfos}>Edit profile</button>
                            {/* <p>Conta criada em: {date}</p> */}
                        </div>
                    </div>
                    <div className='gradiente'></div>
                    {profileDataUser?.bgImg ?
                        <img className='bg-image' src={profileDataUser?.bgImg} alt="" /> :
                        <img className='bg-image no-Image' src={"https://www.pngall.com/wp-content/uploads/2/Upload-PNG-Clipart.png"} alt="" />}
                </div>
                <div className='games-infos-profile'>
                    <div className='card-game-profile'>
                        <figure>
                            <img src="" alt="" />
                        </figure>
                        <h4>Mortal kombat</h4>
                        <h5>Introduction</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolorem, unde officia sequi laudantium corrupti commodi temporibus fugit soluta excepturi. Dignissimos saepe, commodi nesciunt perspiciatis omnis explicabo cupiditate a consequuntur!</p>
                        <hr />
                        <p className='games-price'></p>
                    </div>
                    {/* <div className='card-game'>2</div> */}
                    {/* <div className='card-game'></div> */}
                </div>
                <div className='outra2'>
                    {/* <div>oi</div> */}
                </div>
            </div>
        </section>


    )

}

export default Profile