import React from 'react'

import './Profile.css'

import { useAuthProvider } from '../../context/AuthContext'

function Profile() {

    const user = useAuthProvider()
    // console.log(user.reloadUserInfo.createdAt)

    const stringData = parseInt(user.reloadUserInfo.createdAt)
    const date = new Date(stringData)

    // console.log(date.toLocaleDateString())

    return (
        <section className='adjust-size'>
            <div className='container-profile'>
                <div className='infos-profile'>
                    <figure className='bg-profile'>
                        <img src="img/rust.jpg" alt="" />
                    </figure>
                    <div className='infos-profile-form'>
                        {/* <div className='photo-profile'>
                            {user.photoURL ? (<>
                                <img src={user.PhotoURL} alt="user personal image" />
                            </>) : (<>
                                <div className='profile-image-letter'>
                                    <h2>{user.displayName?.slice(0, 1)}</h2>
                                </div>
                            </>)}
                        </div> */}
                        <div className='photo-profile'>
                                <img src='https://play-lh.googleusercontent.com/xXqGEr9xcJj6E5_Q_IKCp9N7fhBPlq6XAzU8WvKa_UT1psSWgXQXOJyZbn-mOsKcJcYQ' alt="user personal image" />
                        </div>
                       <div className='infos-user'>
                       <h2>{user.displayName}</h2>
                       <p className='email'>{user.email}</p>
                       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet</p>
                       <p>{`Conta criada em: ${date.toLocaleDateString()}`}</p>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Profile