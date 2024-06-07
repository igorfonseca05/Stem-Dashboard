import React, { useState } from 'react'

import "./Button.css"

function Button({ state, changeState, num }) {

  const [buttonClass, setButtonClass] = useState('on')
  const [button, setButton] = useState('')


  function salveOption(e) {
    if (e.target.classList.contains('on')) {
    } else {
      localStorage.removeItem('class')
    }
  }

  function handleGradient(e) {
    e.currentTarget.classList.toggle(buttonClass)
    changeState(!state)

  }

  return (
    <div
      title='Remove gradient'
      className={`toggle-button internal-icon-verified`}
      id="toggleButton"
      onClick={(e) => handleGradient(e)}></div>
  )
}

export default Button