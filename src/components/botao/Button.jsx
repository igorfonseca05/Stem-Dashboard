import React, { useState } from 'react'

import "./Button.css"

function Button({state, changeState, num}) {

  const [buttonClass, setButtonClass] = useState('on')
  const [button, setButton] = useState('')

  
  function salveOption(e) {
    if(e.target.classList.contains('on')) {
    } else {
      localStorage.removeItem('class')
      }
  }
  
  function handleGradient(e) {

    if(e.target.classList.contains(num)) {
      localStorage.setItem('classe', e.target.classList[2])

    }
    
    // console.log(e.currentTarget.classList[2])
    e.currentTarget.classList.toggle(buttonClass)
    localStorage.setItem('class', 'on')
    // changeState(!state)
    
    // if(e.currentTarget.classList.contains('on')) {
    //   localStorage.setItem('class', 'block')
    //   }
      
      // salveOption(e)
      
      }
      
      function verify() {
        const buttonClick = document.querySelector('.toggle-button')

        // buttonClick?.classList.add(localStorage.getItem('class'))
      }
      verify()
      // console.log(gradientState, changeGradientState)

      // console.log(num)
    

      return (
    <div 
    title='Remove gradient'
    className={`toggle-button internal-icon-verified ${num}`} 
    id="toggleButton"
    onClick={(e) => handleGradient(e)}></div>
  )
}

export default Button