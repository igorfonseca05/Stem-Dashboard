
import { useEffect, useState } from "react"

import useDebounce from '../hooks/useDebounce'

function useHandleMenu(isToBeOpened) {
  const [ifToCloseOnClick, setIfToCloseOnClick] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  function handleMenu() {

    const {Mydebounce} = useDebounce()

    function resize() {  
      
      const menu = document.querySelector('.nav-container')
      const topMenu = document.querySelector('.top-menu')
      menu.style.display = 'block' 
      topMenu.style.display = 'block' 

      if (window.innerWidth >= 1200) {
        setIfToCloseOnClick(false)
        setIsOpen(true)
      } 
      else {
        setIsOpen(false)
        setIfToCloseOnClick(true)
      }
    }
    
    // Controlando execução da função    
      window.addEventListener('resize', Mydebounce(resize, 200))
  
    useEffect(() => {  
      resize()
    }, [isToBeOpened])

  }
  
  return { handleMenu, ifToCloseOnClick, isOpen }

}

export default useHandleMenu
