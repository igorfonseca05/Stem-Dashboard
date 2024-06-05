
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


import './Profile.css'
import './Profile-file2.css'

import { useAuthProvider } from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication'
import useMenu from '../../hooks/UseCloseMenu'

import { useRealTimeDataBase } from '../../hooks/useRealTimeDataBase'

import { getData as dados } from '../../hooks/useData'
import Grid from '../../components/grid/Grid'
import Button from '../../components/botao/Button'


function Profile() {

    const biosMaxLength = document.querySelector('.bios')?.maxLength

    const [remaining, setRemaining] = useState(biosMaxLength)
    const [totalLetter, setTotalLetter] = useState(biosMaxLength)
    const [profileDataUser, setProfileDataUser] = useState({})
    const [hideGradient, setHideGradient] = useState(false)

    const user = useAuthProvider()
    const { data } = dados('UserName', 'infosProfile')
    const { updateInfos: updateProfile, error, loading, success } = useAuthentication()


    useEffect(() => {
        setProfileDataUser(data)
    }, [data])

    useEffect(() => {
        setTotalLetter(biosMaxLength)
        setRemaining(biosMaxLength)
    }, [biosMaxLength])

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

        // if (e.target.tagName === 'A') {
        //     form.reset()
        // }

    }

    // Salvar dados do formulario na base de dados
    function updateInfos(e) {
        e.preventDefault()

        const event = e.target

        const newProfileImage = event.newProfileImage.value
        const userName = event.userName.value
        const backgroundImg = event.backgroundImg.value
        const phoneNumber = event.phoneNumber.value
        const country = event.country.value
        const bios = event.bios.value

        const userInfos = {
            newProfileImage,
            userName,
            backgroundImg,
            phoneNumber,
            country,
            bios,
        }

        // console.log(bios, country, phoneNumber)

        updateProfile(userInfos)
    }

    function handleTextArea(e) {
        const inputSize = e.currentTarget.value.length;
        const maxLength = e.currentTarget.maxLength

        const remainingCharacters = maxLength - inputSize
        setRemaining(remainingCharacters)
    }

    function handleChooseBgColor(e) {

        console.log(e.currentTarget.value)


    }

    // console.log(profileDataUser)

    return (
        <section className='adjust-size profile-container'>
            <Grid />
            <div className='pop-up-container'>
                <form className='edit-profile-form' id='updateInfos-form' onSubmit={(e) => updateInfos(e)}>
                    <span className='material-symbols-outlined close-icon' onClick={handleProfileUpdateInfos} title='Fechar popUp'>close</span>
                    <header className='form-header'>
                        <figure className='smallUserFigure'>
                            {user.photoURL ? (<>
                                <img src={profileDataUser?.imgProfile} alt="user personal image" />
                            </>) : (<>
                                <img src="https://i.pinimg.com/474x/31/ec/2c/31ec2ce212492e600b8de27f38846ed7.jpg" alt="" />
                            </>)}
                        </figure>
                        <div>
                            <h5>{profileDataUser?.profileName} / Edit profile</h5>
                            <p>Atualize suas informações pessoais</p>
                        </div>
                    </header>
                    <div className='inputs-responsiveis'>
                        <label htmlFor="userName" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">person</span>
                            <input
                                name='userName'
                                className='input-child'
                                type="text"
                                placeholder={profileDataUser?.profileName ? profileDataUser?.profileName : 'User name'}
                                id='userName'
                                required
                                autoComplete='off'
                            />
                        </label>
                        <label htmlFor="email" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">email</span>
                            <span className="material-symbols-outlined internal-icon-verified">Verified</span>
                            <input
                                name='email'
                                className='input-child'
                                type="text"
                                placeholder='Email'
                                id='email'
                                required
                                autoComplete="off"
                            />
                        </label>
                    </div>
                    <div className="inputs-responsiveis">
                        <label htmlFor="phoneNumber" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">phone</span>
                            <input
                                name='phoneNumber'
                                className='input-child'
                                type="text"
                                placeholder='Phone number'
                                id='phoneNumber'
                                // required
                                autoComplete='o'
                            />
                        </label>
                        <label htmlFor="country" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">Globe</span>
                            <input
                                name='country'
                                className='input-child'
                                type="text"
                                placeholder='Your country'
                                id='country'
                                required

                            />
                        </label>
                    </div>
                    <div className='inputs-responsiveis'>
                        <label htmlFor="newProfileImage" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">Link</span>
                            <input
                                name='newProfileImage'
                                className='input-child'
                                type="text"
                                placeholder='Profile Image'
                                id='newProfileImage'
                                autoComplete='on'
                            />
                        </label>
                        <label htmlFor="backgroundImg" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">Link</span>
                            <Button
                                changeGradientState={setHideGradient}
                                gradientState={hideGradient} />
                            <input
                                className='input-child'
                                type="URL"
                                name="backgroundImg"
                                id="backgroundImg"
                                placeholder='Background image'
                                autoComplete='on'
                            />
                        </label>
                    </div>
                    <div className='ColorInput-container'>
                        <p className='infos-text'>Use background color: </p>
                        {/* <Button/> */}
                        <input type="color" name="backgroundColor" id="" onInput={handleChooseBgColor} />
                    </div>
                    <div className='textArea-container'>
                        <textarea name="bios" id="bios" className='bios' placeholder='Escreva sua Bios' maxLength={200} onInput={handleTextArea}></textarea>
                        <span className='infos-text'>Caracteres-restantes: <span>{remaining} / {totalLetter}</span></span>
                    </div>

                    <div className='div-buttons'>
                        {!loading ? (
                            <>
                                {/* <a className='blue-button button-disabled' onClick={handleProfileUpdateInfos} disabled={loading}>Fechar</a> */}
                                <button className='blue-button button-disabled' type='submit' disabled={loading}>Salvar</button>
                            </>

                        ) : (
                            <>
                                {/* <a className='blue-button' onClick={handleProfileUpdateInfos}>Fechar</a> */}
                                <button className='blue-button' type='submit'>Salvar</button>
                            </>
                        )
                        }
                    </div>
                </form>
            </div>
            <div className='content-profile'>
                <div className='profileContainer'>
                    <span className="material-symbols-outlined edit-icon" onClick={handleProfileUpdateInfos}>edit</span>
                    <div className='user-info-content'>
                        <div className='img-and-name-container'>
                            <figure>
                                {user.photoURL ? <>
                                    <img src={profileDataUser?.imgProfile} alt="" />
                                </> : <>
                                    <img src="https://i.pinimg.com/474x/31/ec/2c/31ec2ce212492e600b8de27f38846ed7.jpg" alt="" />
                                </>
                                }
                            </figure>
                            <div className='user-info-data'>
                                <h3 className='profileName'>{profileDataUser?.profileName}</h3>
                                <p className='infos-text'>{user.email.slice('0', `${user.email.indexOf('@') + 1}`)}</p>
                            </div>
                        </div>
                        <p className='description-bios'>{profileDataUser?.description}</p>
                    </div>
                    <div className='gradient' style={{ display: hideGradient ? 'none' : 'block' }}></div>
                    {profileDataUser?.bgImg ?
                        <img className='bg-image' src={profileDataUser?.bgImg} alt="" /> :
                        <img className='bg-image no-Image' src={"https://www.pngall.com/wp-content/uploads/2/Upload-PNG-Clipart.png"} alt="" />
                    }
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
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta cum magni vel ad, culpa optio et officiis. Quibusdam doloribus, voluptate officiis aliquid, sequi magnam rem laboriosam cum itaque beatae non.</div>
                </div>
            </div>
        </section>


    )

}

export default Profile