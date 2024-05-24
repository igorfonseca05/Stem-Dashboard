
// Recursos da biblioteca
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate} from 'react-router-dom'

import './App.css'
import Menu from './components/Menu/Menu'

// Recursos para analisar preencher contexto de autenticação

// Contexto de autenticação
import { AuthProvider } from './context/AuthContext'
// Funções Firebase
import { onAuthStateChanged } from 'firebase/auth'

// Obtendo Auth do hook UseAuthentication
import { useAuthentication } from './hooks/useAuthentication'

// console.log(dados)
// Componente Menu
import HorizontalMenu from './components/horizontalMenu/HorizontalMenu'

//Rotas
import Home from './pages/Home/Home'
import LoginPage from './pages/login/LoginPage'
import SignUp from './pages/SignUp/SignUp'
import AboutUs from './pages/AboutUs/AboutUs'
import Updates from './pages/updates/Updates'
import Profile from './pages/ProfilePage/Profile'


import { useMenu } from './hooks/useMenu'

function App() {

  const [show, setShow] = useState(false)

  // ======================================
  // Verificando estado de autenticação do usuário

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setUser(user)
      })
  }, [auth])

  if(loadingUser) {
    return <p>Carregando...</p>
  }
// ======================================


  function handleShowMenu () {
    setShow(!show)
  }

  const handleMenu = {
    handleShowMenu,
    show
  }

  return (
    <>
      <AuthProvider value={user}>
      <BrowserRouter>
          <Menu show={show}/>
          <HorizontalMenu />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={!user ? <LoginPage {...handleMenu}/> : <Navigate to={'/'}/>} />
            <Route path='/signUp' element={!user ? <SignUp  {...handleMenu}/> : <Navigate to={'/'}/>} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/updates' element={<Updates />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
