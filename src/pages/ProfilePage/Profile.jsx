
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import './Profile.css'

import { useAuthProvider } from '../../context/AuthContext'
import useMenu from '../../hooks/UseCloseMenu'

function Profile() {

    const user = useAuthProvider()

    const location = useLocation()

    const { handleMenu, isOpen } = useMenu(location.pathname)
     handleMenu()

    //  useEffect(() => {
    //     document.querySelector('.nav-container').style.display = 'block'
    //     document.querySelector('.top-menu').style.display = 'block'
    //  }, [location.pathname])


    // console.log(user)
    // console.log(user.reloadUserInfo.createdAt)

    const stringData = parseInt(user.reloadUserInfo.createdAt)
    const date = new Date(stringData)

    // console.log(date.toLocaleDateString())

    return (
        <section className='adjust-size profile-container'>
            <div className='content-profile'>
                <div className='user-info'>1</div>
                <div className='bg-profile'>2</div>
                <div className='content'>5</div>
            </div>
        </section>

       
    )

}

export default Profile