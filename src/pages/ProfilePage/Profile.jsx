
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
    const [hideGradient, setHideGradient] = useState(false)
    const [hidebackground, setHideBackground] = useState(false)
    const [color, setColor] = useState('#26272b')

    const user = useAuthProvider()
    const { data } = dados('UserName', 'infosProfile')
    const { updateInfos: updateProfile, error, loading, success } = useAuthentication()
    const { updateData } = useRealTimeDataBase()

    // console.log(user)


    useEffect(() => {
        setProfileDataUser(data)
    }, [data])

    useEffect(() => {
        setTotalLetter(biosMaxLength)
        setRemaining(biosMaxLength)
    }, [biosMaxLength])

    useEffect(() => {
        const update = {
            color,
            hideGradient,
            hidebackground
        }
        updateData('UserName', "infosProfile", update)
    }, [color, hideGradient, hidebackground])


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
        const dropdown = document.querySelector('.editConfigContainer')
        const inputsForm = document.querySelectorAll("[data-js='form-input']")

        dropdown.classList.toggle('drop-down-edit-config')


        // console.log(inputsForm)

        // if (e.target.classList.contains("edit-icon")) {
        //     popup.style.display = 'block'
        //     requestAnimationFrame(() => popup.classList.add('open-popup'))
        // }

        // if (e.target.classList.contains("close-icon")) {
        //     popup.classList.remove('open-popup')

        //     popup.addEventListener('transitionend', () => {
        //         popup.style.display = 'none'
        //     }, {once: true})
        // }

        // document.body.classList.toggle('hidden')

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

        // console.log({...userInfos})

        updateProfile(userInfos)
    }

    function handleTextArea(e) {
        const inputSize = e.currentTarget.value.length;
        const maxLength = e.currentTarget.maxLength

        const remainingCharacters = maxLength - inputSize
        setRemaining(remainingCharacters)

        setBios(e.target.value)
    }

    useEffect(() => {
        if (profileDataUser) {
            setImgProfile(profileDataUser.imgProfile)
            setEmail(profileDataUser.email)
            setUserName(profileDataUser.userName)
            setBackgroundImg(profileDataUser.backgroundImg)
            setPhoneNumber(profileDataUser.phoneNumber)
            setCountry(profileDataUser.country)
            setBios(profileDataUser.bios)

            // setUserInfos(userInfos)
            // setColor(profileDataUser)
        }
    }, [profileDataUser])

    // console.log(name)
// console.log(color)
    // console.log(profileDataUser.color)

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
                            <h5>{profileDataUser?.userName} / Edit profile</h5>
                            <p>Atualize suas informações pessoais</p>
                        </div>
                    </header>
                    <div className='inputs-responsiveis'>
                        <label htmlFor="userName" className='input-profile internal-icon-input'>
                            <span className="material-symbols-outlined internal-icon">person</span>
                            <input
                                data-js='form-input'
                                value={userName}
                                name='userName'
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
                                value={email}
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
                                value={phoneNumber}
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
                                value={country}
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
                                value={imgProfile}
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
                                value={backgroundImg}
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
                            value={bios}
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
                    <span className="material-symbols-outlined edit-icon" onClick={handleProfileUpdateInfos}>edit</span>
                    <div className='editConfigContainer'>
                        <div className='editConfigItems'>
                            <p className='infos-text'>Remover gradiente</p>
                            <Button
                                changeGradientState={setHideGradient}
                                gradientState={hideGradient} />
                        </div>
                        <div className='editConfigItems'>
                            <p className='infos-text'>Remove background</p>
                            <Button
                                changeGradientState={setHideBackground}
                                gradientState={hidebackground} />
                        </div>
                        {hidebackground ?
                                <>
                                    <div className='ColorInput-container'>
                                        <p className='infos-text'>Choose a color:</p>
                                        {/* <Button/> */}
                                        <input
                                            data-js='form-input'
                                            type="color"
                                            name="backgroundColor"
                                            id=""
                                            onChange={(e) => setColor(e.target.value) }
                                        />
                                    </div>
                                </> : <></>}
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
                                <h3 className='profileName'>{profileDataUser?.userName}</h3>
                                <p className='infos-text'>{user.email.slice('0', `${user.email.indexOf('@') + 1}`)}</p>
                            </div>
                        </div>
                        <p className='description-bios'>{profileDataUser?.bios}</p>
                    </div>
                    <div className='gradient' style={{ display: hideGradient ? 'none' : 'block' }}></div>
                    {profileDataUser?.hidebackground ?
                        <div className='bg-image' value={''} style={{ backgroundColor: color }}></div> :
                        <img className='bg-image' src={profileDataUser?.backgroundImg} alt="" />
                        // <img className='bg-image no-Image' src={"https://www.pngall.com/wp-content/uploads/2/Upload-PNG-Clipart.png"} alt="" />
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