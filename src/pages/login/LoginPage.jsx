
import "./LoginPage.css"

import {useState}from 'react'

import { useLocation } from "react-router-dom"

import useMenu from "../../hooks/UseCloseMenu"

import { Link } from "react-router-dom"


function LoginPage() {

  const location = useLocation()

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const {handleMenu} = useMenu(location.pathname)

  handleMenu()

  return (
    <section className="login-section">
      <div className="bg">
      <div className="gradient"></div>
      </div>
      <div className="form-container">
        <div className='adjust-content'>
          <div className="header-login">
           {/* <img src="steam.svg" alt="" /> */}
           <h1>SIGN IN</h1>
           <p>Please, enter your email and password</p>
          </div>
          <form>
            {/* <label htmlFor="email">E-mail Adress</label> */}
            <input type="email" id="email" name="email" placeholder='E-mail Adress' required />
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" id="password" name="password" placeholder='Password' required />
            <p className="forget-password"><a href="#">Forget your password?</a></p>
            <div className='align-button'>
              {loading && <button type="submit" className='blue-button' style={{ opacity: '0.5', cursor: 'not-allowed' }} disabled='true'>SIGN UP</button>}
              {!loading && <button type="submit" className='blue-button'>SIGN IN</button>}
            </div>
            <div className="line-container">
             <p className="line">Or</p>
             </div>
              <div className="buttons-login-container">
                <div type="submit" className="google-button">
                  <img src="google.svg" alt="" />
                  <p>Sign in with Google</p>
                </div>
                <p className="create-account-link">Don't you have any account? <Link to={'/SignUp'} href="" style={{fontWeight: 600}}>Sign Up</Link></p>
              </div>
            {error && <div className='infos-container error'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>}
            {success && <div className='infos-container success'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage