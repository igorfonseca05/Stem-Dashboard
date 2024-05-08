
import React, { useEffect, useState } from 'react'


import './SignUp.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'


import useMenu from '../../hooks/UseCloseMenu'
import Login_SignUp_Menu from '../../components/Menu-Login-SignUp/Login_SignUp_Menu'

function SignUp({handleShowMenu}) {

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const location = useLocation()

    const {handleMenu} =  useMenu(location.pathname)
    handleMenu()

    function handleAnimation() {
        setTimeout(() => {
            document.querySelector('.animation-block').style.display = 'none'
            document.querySelector('.SignIn-Section').style.animationPlayState = 'running'
        }, 500)
    }

    function getFormData (e) {
        e.preventDefault()
        const user = {
            userName: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        console.log(user)
    }

    return (
        <>
            <div className='animation-block' onAnimationEnd={() => {handleAnimation()}}>
                <img className='animate-logo' src="steam-logo.png" alt="" />
                <h1>STEAM</h1>
            </div>
            <section className='SignIn-Section'>
                <Login_SignUp_Menu handleShowMenu={handleShowMenu}/>
                {/* <div className='gradient-right'></div> */}
                <div className='bg-signUp'></div>
                <div className="signUp-form-container">
                    <div className='adjust-content'>
                        <h2>Join our Steam community</h2>
                        <Link to={'/login'}><span className='question'>Existing user? </span><p className='efect'>Sign In</p></Link>
                        <form onSubmit={(e) => getFormData(e)}>
                            {/* <label htmlFor="username">User Name</label> */}
                            <input type="text" id="username" name="username" placeholder='User Name' required />

                            {/* <label htmlFor="email">E-mail Adress</label> */}
                            <input type="email" id="email" name="email" placeholder='E-mail Adress' required />

                            {/* <label htmlFor="password">Password</label> */}
                            <input type="password" id="password" name="password" placeholder='Password' required />

                            <div className='align-button'>
                                {loading && <button type="submit" className='blue-button' style={{opacity: '0.5', cursor: 'not-allowed'}} disabled='true'>SIGN UP</button>}

                                {!loading && <button type="submit" className='blue-button'>SIGN UP</button>}
                            </div>

                            <p className='info-policy'>By clicking Sign Up, I confirm that i am 13 years of age or older and agree to the terms of the <a href='#'>Steam Subscriber Agreement</a> and the <a href='#'>Valve Privacy Policy</a></p>

                             {error && <div className='infos-container error'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>}

                             {success && <div className='infos-container success'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>}
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp