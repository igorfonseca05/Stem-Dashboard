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
        // <section className='adjust-size'>
        //     <div className='container-profile'>
        //         <div className='infos-profile'>
        //             <figure className='bg-profile'>
        //                 <img src="img/call.jpg" alt="" />
        //             </figure>
        //             <div className='infos-profile-form'>
        //                 {/* <div className='photo-profile'>
        //                     {user.photoURL ? (<>
        //                         <img src={user.PhotoURL} alt="user personal image" />
        //                     </>) : (<>
        //                         <div className='profile-image-letter'>
        //                             <h2>{user.displayName?.slice(0, 1)}</h2>
        //                         </div>
        //                     </>)}
        //                 </div> */}
        //                 <div className='photo-profile'>
        //                         <img src='https://play-lh.googleusercontent.com/xXqGEr9xcJj6E5_Q_IKCp9N7fhBPlq6XAzU8WvKa_UT1psSWgXQXOJyZbn-mOsKcJcYQ' alt="user personal image" />
        //                         <div className='online-marker'></div>
        //                 </div>
        //                <div className='infos-user'>
        //                <h2>{user.displayName}</h2>
        //                <p className='email'>{user.email}</p>
        //                <p className='bios'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. r adipisicing elitr lor lsdfgsd</p>
        //                <p className='createdAt'>{`Conta criada em: ${date.toLocaleDateString()}`}</p>
        //                </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className='profile-section adjust-size'>
            <div className='personal-infos-container'>
                <div className='profile'>
                    <div className='infos-user'>
                        <div className='photo-profile'>
                        <img src="https://play-lh.googleusercontent.com/67MbRDRAe3c8G5WdTApiGt4CS6kgekdgvSXhpRcN_Sp_UEaj6BtaW5WTyEI9NowBi24=w526-h296-rw" alt="user personal image" />
                            {/* {user.photoURL ? (<>
                                <img src={user.PhotoURL} alt="user personal image" />
                            </>) : (<>
                                <div className='profile-image-letter'>
                                    <h2>{user.displayName?.slice(0, 1)}</h2>
                                </div>
                            </>)} */}
                        </div>
                        <h2>{user.displayName}</h2>
                        <p className='email'>{user.email}</p>
                        <p className='bios'>A Educação em Saúde, conforme definida, é um processo contínuo de construção de conhecimentos que envolve profissionais de saúde</p>
                        <p className='createdAt'>{`Conta criada em: ${date.toLocaleDateString()}`}</p>
                    </div>
                </div>
                <figure className='bg-profile'>
                    <img src="img/call.jpg" alt="" />
                </figure>
            </div>
            <div className='children'>
                <div className='content'>A</div>
                <div className='content'>B</div>
                <div className='content'>C</div>
            </div>
        </section>
    )

}

export default Profile