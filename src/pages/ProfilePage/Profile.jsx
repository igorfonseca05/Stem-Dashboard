
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


import './Profile.css'

import { useAuthProvider } from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication'
import useMenu from '../../hooks/UseCloseMenu'

import { useRealTimeDataBase } from '../../hooks/useRealTimeDataBase'

function Profile() {

    const user = useAuthProvider()

    const { getData } = useRealTimeDataBase()

    const [realTimeprofileInfos, setrealTimeProfileInfos] = useState({})

    const location = useLocation()

    const {
        updateInfos: updateProfile,
        error,
        loading,
        success } = useAuthentication()


    // Controlando abertura e fechamento do menu
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

    // Adicionando dados obtidos em tempo Real
    function gettingDataRealTime(infos) {
        setrealTimeProfileInfos(infos)
    }

    // Salvar dados do formulario na base de dados
    function updateInfos(e) {
        e.preventDefault()

        const newProfileImage = e.target.newProfileImage.value
        const newUserName = e.target.newUserName.value
        const backgroundImg = e.target.backgroundImg.value

        updateProfile(newUserName, newProfileImage, backgroundImg)

        getData(gettingDataRealTime, 'UserName/')
    }

    // Obtendo dados ao abrir o perfil
    useEffect(() => getData(gettingDataRealTime, 'UserName/'), [])

    console.log(realTimeprofileInfos)

    return (
        <section className='adjust-size profile-container'>
            <div className='pop-up-container'>
                <form className='edit-profile-form' onSubmit={(e) => updateInfos(e)}>
                    <h2>Enter your data</h2>
                    <label htmlFor="newProfileImage">
                        <input type="text" placeholder='Enter URL Profile Image' id='newProfileImage' />
                    </label>
                    <label htmlFor="newUserName">
                        <span class="material-symbols-outlined">person</span>
                        <input type="text" placeholder='Enter User Name' id='newUserName' />
                    </label>
                    <label htmlFor="backgroundImg">
                        <input type="URL" name="" id="backgroundImg" placeholder='Enter URL background image' />
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
                            {user.photoURL ? <>
                                <img src={realTimeprofileInfos?.profile_picture} alt="" />
                            </> : <>
                            {/* <span class="material-symbols-outlined">person</span> */}
                                <span className='material-symbols-outlined'>person</span>
                            </>
                            }
                        </figure>
                        <div className='user-info-data'>
                            <h3>{realTimeprofileInfos?.profileName}</h3>
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