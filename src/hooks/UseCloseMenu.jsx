
import { useEffect, useState } from "react"

function useMenu(location) {

  const [isOpen, setIsOpen] = useState(true)
  const [SizeScreen, setSizeScreen] = useState()
  
  function handleMenu() {
    
    useEffect(() => {
      if(location === '/login' || location === '/SignUp') {
        const menu = document.querySelector('.nav-container')
        const top_menu = document.querySelector('.top-menu')
        // setIsOpen(false)
        menu.style.display = 'none' 
        // menu.style.visibility = 'hidden' 
        // top_menu.style.visibility = 'hidden' 
        top_menu.style.display = 'none' 
        // menu.classList.remove()
        // menu.setAttribute('class', 'nav-container fechado')

      return
    }

    }, [])

    // useEffect(() => {
    //   const horizontalMenu = document.querySelector('.top-menu')

    //   const isToRemove = action === 'remove'

    //   // if(SizeScreen) return menu.classList.remove('open')

    //   if (isToRemove) {
    //     menu.classList.remove('open')
    //     menu.classList.add('close')
    //     horizontalMenu.style.transform = 'translateY(-100%)'
    //     horizontalMenu.style.transition = 'all 0.2s ease-in-out'
    //   } else {
    //     horizontalMenu.style.transform = 'translateY(0%)'
    //     horizontalMenu.style.transition = 'all 0.2s ease-in-out'
    //     menu.classList.remove('close')
    //     menu.classList.add('open')
    //   }

    // }, [])
  }

  return { handleMenu, isOpen }


  
  const Mydebounce = (func, wait, immediate) => {
    let timeOut;
    return function (...args) {
        const context = this;
        const later = function () {
            timeOut = null;
            if (!immediate) func.apply(context, args)
        }

        const callNow = immediate && !timeOut
        clearTimeout(timeOut)
        timeOut = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }

}

  function resize() {
    
  }
  console.log(location)


  window.addEventListener('resize', Mydebounce(resize, 500))

}

export default useMenu