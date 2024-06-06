import React from 'react'

import "./Button.css"

function Button({state, changeState}) {

  function handleGradient(e) {
    e.currentTarget.classList.toggle('on')

    changeState(!state)

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