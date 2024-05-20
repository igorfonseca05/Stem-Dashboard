
import "./LoginPage.css"

import { useEffect, useState } from 'react'

import { useLocation, useNavigate } from "react-router-dom"

import useMenu from "../../hooks/UseCloseMenu"

import { Link } from "react-router-dom"
import Login_SignUp_Menu from "../../components/Menu-Login-SignUp/Login_SignUp_Menu"

import { useAuthentication } from "../../hooks/useAuthentication"


function LoginPage({ handleShowMenu }) {

  const { 
    SignInUser,
    error: erro,
    loading,
    success,
    loginWithGoogle
  } = useAuthentication()

  // console.log(handleShowMenu)

  const location = useLocation()
  const navigator = useNavigate()

  const [error, setError] = useState(false)
  // const [success, setSuccess] = useState(false)
  // const [loading, setLoading] = useState(false)

  const { handleMenu } = useMenu(location.pathname)

  handleMenu()

  async function handleFormLogin(e) {
    e.preventDefault()

    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    const res = await SignInUser(user)

    if (res) {
      // console.log(res)
      navigator('/')
    }

  }

  useEffect(() => {
    setError(erro)
  }, [erro])

  return (
    <section className="login-section">
      <Login_SignUp_Menu handleShowMenu={handleShowMenu} />
      <div className="bg">
      </div>
      <div className="form-container">
        <div className='adjust-content'>
          <div className="header-login">
            {/* <img src="steam.svg" alt="" /> */}
            <h1>SIGN IN</h1>
            <p>Please, enter your email and password</p>
          </div>
          <form onSubmit={handleFormLogin}>
            {/* <label htmlFor="email">E-mail Adress</label> */}
            <input type="email" id="email" name="email" placeholder='E-mail Adress' required />
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" id="password" name="password" placeholder='Password' required />
            <p className="forget-password"><a href="#">Forget your password?</a></p>
            <div className='align-button'>
              {!loading && <button type="submit" className='blue-button' style={{ opacity: '0.5', cursor: 'not-allowed' }} disabled={loading}>Wait...</button>}
              {loading && <button type="submit" className='blue-button'>SIGN IN</button>}
            </div>
            <div className="line-container">
              <p className="line">Or</p>
            </div>
            <div className="buttons-login-container">
              <div type="submit" className="google-button" onClick={() => loginWithGoogle()}>
                <img src="google.svg" alt="" />
                <p>Sign in with Google</p>
              </div>
              <p className="create-account-link">Don't you have any account?
                <Link
                  to={'/SignUp'}
                  className={`${error ? 'fadeInEffect' : 'signUp-link'}`}
                >Sign Up</Link>
              </p>
            </div>
            {error && <div className='infos-container error'><p>{error}</p></div>}
            {success && <div className='infos-container success'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage