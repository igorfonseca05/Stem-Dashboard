import React from 'react'

import './Profile.css'

import { useAuthProvider } from '../../context/AuthContext'

function Profile() {

    const user = useAuthProvider()

    return (
        <section className='adjust-size'>
            <div className='container-profile'>
                <div className='infos-profile'>
                    <figure className='bg-profile'>
                        <img src="img/rust.jpg" alt="" />
                    </figure>
                    <div className='infos-profile-form'>
                        <div className='photo-profile'>
                            {user.photoURL ? (<>
                                <img src={user.PhotoURL} alt="user personal image" />
                            </>) : (<>
                                <div className='profile-image-letter'>
                                    <h2>{user.displayName?.slice(0, 1)}</h2>
                                </div>
                            </>)}
                        </div>
                       <h2>{user.displayName}</h2>
                       <div className='infos-user'>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Profile