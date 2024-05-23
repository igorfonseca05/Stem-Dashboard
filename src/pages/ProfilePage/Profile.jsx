import React from 'react'

import './Profile.css'

import { useAuthProvider } from '../../context/AuthContext'

function Profile() {

    const user = useAuthProvider()

    // console.log(user)
    // console.log(user.reloadUserInfo.createdAt)

    const stringData = parseInt(user.reloadUserInfo.createdAt)
    const date = new Date(stringData)

    // console.log(date.toLocaleDateString())

    return (
        <section className='adjust-size profile-container'>
            <div className='content-profile'>
                <div className='personal-bg-info'>
                    <div className='user-info'>
                        <h2>{user.displayName}</h2>
                    </div>
                    <figure className='bg-profile'>
                        <img src="img/call.jpg" alt="" />
                    </figure>
                </div>
                <div>
                    <div>2</div>
                    <div>1</div>
                </div>
            </div>
        </section>

       
    )

}

export default Profile