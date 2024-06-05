import React from 'react'

import "./Button.css"

function Button({gradientState,changeGradientState}) {

  function handleGradient(e) {
    e.currentTarget.classList.toggle('on')

    changeGradientState(!gradientState)

  }

  // console.log(gradientState, changeGradientState)

  return (
    <div 
    title='Remove gradient'
    className={`toggle-button internal-icon-verified`} 
    id="toggleButton"
    onClick={(e) => handleGradient(e)}></div>
  )
}

export default Button