
import { useEffect, useState } from "react"

function useMenu(action) {

  function handleMenu() {

    const [SizeScreen, setSizeScreen] = useState()

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
      setSizeScreen(window.innerWidth === window.screen.width)
    }


    window.addEventListener('resize', Mydebounce(resize, 500))

    useEffect(() => {
      const menu = document.querySelector('.nav-container')
      const horizontalMenu = document.querySelector('.top-menu')

      const isToRemove = action === 'remove'

      if (isToRemove) {
        menu.classList.remove('open')
        menu.classList.add('close')
        horizontalMenu.style.transform = 'translateY(-100%)'
        horizontalMenu.style.transition = 'all 0.4s ease-in-out'
      } else {
        horizontalMenu.style.transform = 'translateY(0%)'
        horizontalMenu.style.transition = 'all 0.4s ease-in-out'
        menu.classList.remove('close')
        menu.classList.add('open')
      }

    }, [setSizeScreen])
  }

  return { handleMenu }

}

export default useMenu