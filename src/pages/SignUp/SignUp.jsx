
import React, { useEffect, useState } from 'react'

// Important resource do deal with XSS attacks
import DOMPurify from 'dompurify'

import './SignUp.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

import useMenu from '../../hooks/UseCloseMenu'
import Login_SignUp_Menu from '../../components/Menu-Login-SignUp/Login_SignUp_Menu'

// Authentication Hook
import { useAuthentication } from '../../hooks/useAuthentication'
import Warnings from '../../components/Warnings/Warnings'

function SignUp({ handleShowMenu }) {

    const navigate = useNavigate()

    // Dealing with Menu animation first
    const location = useLocation()

    const { handleMenu } = useMenu(location.pathname)
    handleMenu()

    function handleAnimation() {
        setTimeout(() => {
            document.querySelector('.animation-block').style.display = 'none'
            document.querySelector('.SignIn-Section').style.animationPlayState = 'running'
        }, 500)
    }

    // Signing Up a user to my application
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirm] = useState('')

    const [elementClass, setClass] = useState('')

    // Temporary variables
    const [error, setError] = useState(false)
    // const [success, setSuccess] = useState(false)
    // const [loading, setLoading] = useState(false)

    // Importing the function that is responsable for create user
    const { createUser, error: erro, loading, success } = useAuthentication()

    async function handleGetFormData(e) {
        e.preventDefault()

        setError('')

        const user = {
            username,
            email,
            password,
        }

        // Verifying if passwords are the same
        if (password !== confirmPassword) {
            setError('As senhas precisam ser iguais!')
            return
        }

        const createdUser = await createUser(user)

        // console.log(createdUser)

        if (createdUser) {
            e.target.reset()

            setTimeout(() => {
                navigate('/')
            }, 1000)
        }
    }

    useEffect(() => {
        setError(erro)
    }, [erro])

    return (
        <>
            <div className='animation-block' onAnimationEnd={() => { handleAnimation() }}>
                <img className='animate-logo' src="steam-logo.png" alt="" />
                <h1>STEAM</h1>
            </div>
            <section className='SignIn-Section'>
                <Login_SignUp_Menu handleShowMenu={handleShowMenu} />
                {/* <div className='gradient-right'></div> */}
                <div className='bg-signUp'>
                    <div className='brush'></div>
                    <img src="fulSteamLogo.png" alt="" />
                </div>
                <div className="signUp-form-container">
                    <div className='adjust-content'>
                        <h2>Join our Steam community</h2>
                        <Link to={'/login'}><span className='question'>Existing user? </span><p className='efect'>Sign In</p></Link>
                        <form onSubmit={(e) => handleGetFormData(e)}>
                            {/* <label htmlFor="username">User Name</label> */}
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                placeholder='User Name'
                                required
                                onInput={(e) => setUserName(DOMPurify.sanitize(e.target.value))} />

                            {/* <label htmlFor="email">E-mail Adress</label> */}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                placeholder='E-mail Adress'
                                required
                                onInput={(e) => setEmail(DOMPurify.sanitize(e.target.value))} />

                            {/* <label htmlFor="password">Password</label> */}
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                placeholder='Password'
                                required
                                onInput={(e) => setPassword(DOMPurify.sanitize(e.target.value))} />
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                value={confirmPassword}
                                placeholder='Confirm password'
                                required
                                onInput={(e) => setConfirm(DOMPurify.sanitize(e.target.value))} />

                            <div className='align-button'>
                                {!loading && <button type="submit" className='blue-button' style={{ opacity: '0.5', cursor: 'not-allowed' }} disabled={loading}>Wait...</button>}
                                {loading && <button type="submit" className='blue-button'>SIGN UP</button>}
                            </div>

                            <p className='info-policy'>By clicking Sign Up, I confirm that i am 13 years of age or older and agree to the terms of the <a href='#'>Steam Subscriber Agreement</a> and the <a href='#'>Valve Privacy Policy</a></p>
                                {error && <Warnings warning='error' message={error} />}
                                {success && <Warnings warning='success' message={success} />}                            
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp