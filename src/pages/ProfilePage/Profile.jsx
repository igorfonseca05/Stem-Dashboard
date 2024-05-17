import React from 'react'

import './Profile.css'

import { useAuthProvider } from '../../context/AuthContext'

function Profile() {

    const user = useAuthProvider()

    return (
        <section className='adjust-size'>
            <div className='container-profile'>
                <figure className='bg-profile'>
                    {/* <img src="img/destiny.jpg" alt="" /> */}
                </figure>
                <div className='photo-profile'>
                    {user.photoURL ? (<>
                        <img src={user.PhotoURL} alt="user personal image" />
                    </>) : (<>
                        <div className='profile-image-letter'>
                            <h2>{user.displayName?.slice(0, 1)}</h2>
                        </div>
                    </>)}
                </div>
            </div>

            <img src="" alt="" /></section>
    )

}

export default Profile