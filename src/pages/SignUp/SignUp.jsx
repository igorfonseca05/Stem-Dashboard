
import React, { useEffect } from 'react'


import './SignUp.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'


import useMenu from '../../hooks/UseCloseMenu'

function SignUp() {

    // const {handleMenu} =  useMenu('remove')
    // handleMenu()

    return (
        <section className='SignIn-Section sizePage'>

            <div className='animation-block'>
            <img className='animate-logo' src="steam-logo.png" alt="" />
            <h1>STEAM</h1>
            </div>

            <div className='infos-SignUp'>
                {/* <figure>
                    <img src="steam.svg" alt="" />
                </figure> */}
                {/* <p>The ultimate destination for playing, discussing, and creating games.</p> */}
            </div>
            <div className="signUp-form-container">
                <div className='adjust-content'>
                <h2>Join our community</h2>
                <Link to={'/login'}><span className='question'>Existing user? </span><p className='efect'>Sign In</p></Link>
                <form>
                    {/* <label htmlFor="username">User Name</label> */}
                    <input type="text" id="username" name="username" placeholder='User Name' required />

                    {/* <label htmlFor="email">E-mail Adress</label> */}
                    <input type="email" id="email" name="email" placeholder='E-mail Adress' required />

                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" id="password" name="password" placeholder='Password' required />

                    <div className='align-button'>
                        <button type="submit" className='blue-button'>SIGN UP</button>
                    </div>
                    <p>By clicking Sign Up, I confirm that i am 13 years of age or older and agree to the terms of the <a href='#'>Steam Subscriber Agreement</a> and the <a href='#'>Valve Privacy Policy</a></p>
                </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp