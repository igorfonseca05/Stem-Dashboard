import React from 'react'

import './PopUp.css'

function PopUp() {

    function handleProfileUpdateInfos() {
        const popup = document.querySelector('.pop-up-container')

        popup.classList.toggle('open-popup')
        document.body.classList.toggle('hidden')

    }
    
  return (
    <div className='pop-up-container'>
                <div className='edit-profile-container'>
                    <label htmlFor="new-user-name">
                        <input type="text" placeholder='New user name'  id='new-user-name'/>
                    </label>
                    <label htmlFor="new-background">
                        <input type="text" placeholder='URL Background' id='new-background' />
                    </label>
                    <button className='blue-button' onClick={handleProfileUpdateInfos}>salvar</button>
                </div>
            </div>
  )
}

export default PopUp