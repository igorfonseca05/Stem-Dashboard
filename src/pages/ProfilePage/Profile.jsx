
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
import { child } from 'firebase/database'


function Profile() {

    const standardBiosMessage = 'Compartilhe um pouco sobre você com a nossa comunidade!'

    const user = useAuthProvider()
    const { data } = dados('UserName', 'infosProfile')
    const { data: preferences } = dados('UserName', 'preferences')

    const biosMaxLength = document.querySelector('.bios')?.maxLength

    const [imgProfile, setImgProfile] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [backgroundImg, setBackgroundImg] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [country, setCountry] = useState('')
    const [bios, setBios] = useState('')


    const [remaining, setRemaining] = useState(biosMaxLength)
    const [totalLetter, setTotalLetter] = useState(biosMaxLength)
    const [profileDataUser, setProfileDataUser] = useState({})

    // console.log(profileDataUser)

    // Preferences
    const [userPreferences, setPreferences] = useState({})
    const [hideGradient, setHideGradient] = useState(false)
    const [hidebackground, setHideBackground] = useState(false)
    const [color, setColor] = useState('#26272b')
    const [bgPosition, setBgPosition] = useState('top')

    const [hideEditIcon, setHideEditIcon] = useState(true)

    // console.log(bgPosition)

    const { updateInfos: updateProfile, error, loading, success } = useAuthentication()
    const { updateData } = useRealTimeDataBase()

    // console.log(userPrefe rences.hidebackground)


    useEffect(() => {
        if (data || preferences) {
            setProfileDataUser(data)
            setPreferences(preferences)
        }
    }, [data, preferences])


    useEffect(() => {
        setTotalLetter(biosMaxLength)
        setRemaining(biosMaxLength)
    }, [biosMaxLength])


    useEffect(() => {
        
    }, [])



    useEffect(() => {
        if (!userPreferences) return
        setHideGradient(userPreferences?.hideGradient)
        setHideBackground(userPreferences?.hidebackground)
        setColor(userPreferences?.color)
        setBgPosition(userPreferences?.bgPosition)
    }, [userPreferences])

    // console.log(remaining)

    useEffect(() => {
        if (color && hideGradient && hideGradient) {
            const update = {
                color,
                hideGradient,
                hidebackground,
                bgPosition
            }
            updateData('UserName', "preferences", update)
        }

    }, [color, hideGradient, hidebackground, bgPosition])

    // Controlando abertura e fechamento do menu
    const location = useLocation()
    const { handleMenu, isOpen } = useMenu(location.pathname)
    handleMenu()

    // Obtendo data de criação da conta
    const stringData = parseInt(user.reloadUserInfo.createdAt)
    const date = new Date(stringData).toLocaleDateString()


    // PopUp para atualizar informações pessoais
    function handleOpenMenuOptions(e) {
        const dropdown = document.querySelector('.editConfigContainer')
        const editProfileButton = document.querySelector('.edit-profile')
        dropdown.classList.toggle('drop-down-edit-config')

        editProfileButton.addEventListener('click', (e) => {
            dropdown.classList.toggle('drop-down-edit-config')
        }, { once: true })
    }

    function handleProfileUpdateInfos(e) {
        const popup = document.querySelector('.pop-up-container')

        if (e.target.classList.contains("edit-profile")) {
            popup.style.display = 'block'
            requestAnimationFrame(() => popup.classList.add('open-popup'))
        }

        if (e.target.classList.contains("close-icon")) {
            popup.classList.remove('open-popup')

            popup.addEventListener('transitionend', () => {
                popup.style.display = 'none'
            }, { once: true })
        }

        document.body.classList.toggle('hidden')
    }

    // Salvar dados do formulario na base de dados
    function updateInfos(e) {
        e.preventDefault()

        const userInfos = {
            imgProfile,
            email,
            userName,
            backgroundImg,
            phoneNumber,
            country,
            bios,
        }

        updateProfile(userInfos)
    }

    function handleTextArea() {
        const inputSize = document.querySelector('.bios').value.length;
        const maxLength = document.querySelector('.bios').maxLength

        const remainingCharacters = maxLength - inputSize
        setRemaining(remainingCharacters)

        setBios(inputSize.value)
    }

    useEffect(() => {
        handleTextArea()
    }, [])

    useEffect(() => {
        if (profileDataUser) {
            setImgProfile(profileDataUser.imgProfile)
            setEmail(profileDataUser.email)
            setUserName(profileDataUser.userName)
            setBackgroundImg(profileDataUser.backgroundImg)
            setPhoneNumber(profileDataUser.phoneNumber)
            setCountry(profileDataUser.country)
            setBios(profileDataUser.bios)
        }
    }, [profileDataUser])


    useEffect(() => {
        const backgroud = document.querySelector('.profileContainer')

        if (userPreferences.hidebackground) {
            backgroud.style.backgroundImage = `none`
            backgroud.style.backgroundColor = userPreferences.color
            return
        }
        backgroud.style.backgroundImage = `url("${profileDataUser.backgroundImg}")`
        backgroud.style.backgroundPosition = bgPosition

    }, [userPreferences.hidebackground, bgPosition, userPreferences.color, profileDataUser.backgroundImg])

    // console.log(userPreferences)

    return (
        <section className='adjust-size profile-container'>
            <Grid />
            <div className='pop-up-container'>
                <form className='edit-profile-form' id='updateInfos-form' onSubmit={(e) => updateInfos(e)}>
                    <span className='material-symbols-outlined close-icon' onClick={handleProfileUpdateInfos} title='Fechar popUp'>close</span>
                    <header className='form-header'>
                        <figure className='smallUserFigure'>
                            {profileDataUser?.imgProfile ?
                                <img src={profileDataUser?.imgProfile} alt="user personal image" /> :
                                <img src="https://i.pinimg.com/474x/31/ec/2c/31ec2ce212492e600b8de27f38846ed7.jpg" alt="" />}
                        </figure>
                        <div>
                            <h5 style={{textTransform:'capitalize'}}>{profileDataUser?.userName ? profileDataUser?.userName : user.displayName} / Edit profile</h5>
                            <p>Atualize suas informações pessoais</p>
                        </div>
                    </header>
                    <div className='inputs-responsiveis'>
                        <label htmlFor="userName" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">person</span>
                            <input
                                data-js='form-input'
                                value={userName ? userName : ''}
                                name='userName'
                                placeholder='User name'
                                className='input-child'
                                type="text"
                                // placeholder={profileDataUser?.userName ? profileDataUser?.userName : 'User name'}
                                id='userName'
                                required
                                onInput={(e) => setUserName(e.target.value)}
                            />
                        </label>
                        <label htmlFor="email" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">email</span>
                            <span className="material-symbols-outlined internal-icon-verified">Verified</span>
                            <input
                                data-js='form-input'
                                value={email ? email : ''}
                                name='email'
                                className='input-child'
                                type="text"
                                placeholder='Email'
                                id='email'
                                required
                                onInput={(e) => { setEmail(e.target.value) }}
                            />
                        </label>
                    </div>
                    <div className="inputs-responsiveis">
                        <label htmlFor="phoneNumber" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">phone</span>
                            <input
                                data-js='form-input'
                                value={phoneNumber ? phoneNumber : ''}
                                name='phoneNumber'
                                className='input-child'
                                type="text"
                                placeholder='Phone number'
                                id='phoneNumber'
                                required
                                onInput={(e) => { setPhoneNumber(e.target.value) }}
                            />
                        </label>
                        <label htmlFor="country" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">Globe</span>
                            <input
                                data-js='form-input'
                                value={country ? country : ''}
                                name='country'
                                className='input-child'
                                type="text"
                                placeholder='Your country'
                                id='country'
                                required
                                onInput={(e) => { setCountry(e.target.value) }}
                            />
                        </label>
                    </div>
                    <div className='inputs-responsiveis'>
                        <label htmlFor="imgProfile" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">Link</span>
                            <input
                                data-js='form-input'
                                value={imgProfile ? imgProfile : ''}
                                className='input-child'
                                type="text"
                                name='imgProfile'
                                id='imgProfile'
                                placeholder='Profile Image'
                                onInput={(e) => { setImgProfile(e.target.value) }}
                            />

                        </label>
                        <label htmlFor="backgroundImg" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">Link</span>
                            {/* <Button
                                changeGradientState={setHideGradient}
                                gradientState={hideGradient} /> */}
                            <input
                                data-js='form-input'
                                value={backgroundImg ? backgroundImg : ''}
                                className='input-child'
                                type="URL"
                                name="backgroundImg"
                                id="backgroundImg"
                                placeholder='Image li'
                                onInput={(e) => { setBackgroundImg(e.target.value) }}
                            />
                        </label>
                    </div>
                    <div className='textArea-container'>
                        <textarea
                            data-js='form-input'
                            value={bios ? bios : ''}
                            name="bios"
                            id="bios"
                            className='bios'
                            placeholder='Escreva sua Bios'
                            maxLength={200}
                            onInput={handleTextArea}></textarea>
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
                    <span 
                    className="material-symbols-outlined edit-icon" 
                    onClick={handleOpenMenuOptions}>edit</span>

                    <div className='editConfigContainer'>
                        <div className='editConfigItems'>
                            <p className='infos-text'>Remover gradiente</p>
                            <Button
                                changeState={setHideGradient}
                                state={hideGradient}
                                data = {userPreferences}
                                num={1} />
                        </div>
                        <div className='editConfigItems'>
                            <p className='infos-text'>Remove background</p>
                            <Button
                                changeState={setHideBackground}
                                state={hidebackground}
                                data = {userPreferences}
                                num={2} />
                        </div>
                        {!hidebackground ?
                            <>
                                <div className='editConfigItems radios-buttom'>
                                    <label htmlFor='top' className='label-radios-button'>
                                        <span className='infos-text'>Top</span>
                                        <input
                                            value={'top'}
                                            type="radio"
                                            name="bg-position"
                                            id="top"
                                            onInput={(e) => setBgPosition(e.currentTarget.value)} />
                                    </label>
                                    <label htmlFor="" className='label-radios-button'>
                                        <span className='infos-text'>Center</span>
                                        <input
                                            value={"center"}
                                            type="radio"
                                            name="bg-position"
                                            id="center"
                                            onInput={(e) => setBgPosition(e.currentTarget.value)} 
                                            />
                                    </label>
                                    <label htmlFor="" className='label-radios-button'>
                                        <span className='infos-text'>Bottom</span>
                                        <input
                                            value={"bottom"}
                                            type="radio"
                                            name="bg-position"
                                            id="bottom"
                                            onInput={(e) => setBgPosition(e.currentTarget.value)} 
                                            />
                                    </label>
                                </div>
                            </> :
                            <>
                                <div className='ColorInput-container editConfigItems'>
                                    <p className='infos-text'>Choose a color:</p>
                                    <input
                                        value={userPreferences.color ? userPreferences.color : "#000"}
                                        data-js='form-input'
                                        type="color"
                                        name="backgroundColor"
                                        id=""
                                        onChange={(e) => setColor(e.target.value)}
                                    />
                                </div>
                            </>
                        }
                        <button
                            className='blue-button edit-profile'
                            onClick={handleProfileUpdateInfos}>Edit profile</button>
                    </div>
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
                                <h3 className='profileName'>{profileDataUser?.userName ? profileDataUser?.userName : user.displayName}</h3>
                                <p className='infos-text'>{user.email.slice('0', `${user.email.indexOf('@') + 1}`)}</p>
                            </div>
                        </div>
                        <p className='description-bios'>{profileDataUser?.bios? profileDataUser?.bios : standardBiosMessage}</p>
                    </div>
                    <div className='gradient' style={{ display: hideGradient ? 'none' : 'block' }}></div>
                </div>
                <div className='outra2'>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta cum magni vel ad, culpa optio et officiis. Quibusdam doloribus, voluptate officiis aliquid, sequi magnam rem laboriosam cum itaque beatae non.</div>
                </div>
                <div className='outra3'>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta cum magni vel ad, culpa optio et officiis. Quibusdam doloribus, voluptate officiis aliquid, sequi magnam rem laboriosam cum itaque beatae non.</div>
                </div>
            </div>
        </section>


    )

}

export default Profile