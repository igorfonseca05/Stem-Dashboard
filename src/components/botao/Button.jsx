import React, { useEffect, useState } from 'react'

import "./Button.css"

import { getData } from '../../hooks/useData'

function Button({ state, changeState, data,num }) {

  
  const [buttonClass, setButtonClass] = useState('on')
  const [button, setButton] = useState('')
  
  function handleGradient(e) {
  
    e.currentTarget.classList.toggle(buttonClass)

    // localStorage.setItem('buttonStatte', 'on')
    changeState(!state)

  }

  function VerifyButtonState() {
    if(data.handleGradient) {
      // const buttonOne = document.querySelector('')
    }
  }

  return (
    <div
      title='Remove gradient'
      className={`toggle-button internal-icon-verified ${num}`}
      id="toggleButton"
      onClick={(e) => handleGradient(e)}></div>
  )
}

export default Button