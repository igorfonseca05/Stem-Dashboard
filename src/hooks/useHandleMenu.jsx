
import { useEffect, useState } from "react"

import useDebounce from '../hooks/useDebounce'

function useHandleMenu() {
  const [closeMenuWithClickOnItem, setcloseMenuWithClickOnItem] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  function handleMenu() {

    const {Mydebounce} = useDebounce()

    function resize() {    
      const menu = document.querySelector('.nav-container')
      const topMenu = document.querySelector('.top-menu')
      // menu.style.display = 'block' 
      // topMenu.style.display = 'block' 

      if (window.innerWidth >= 1200) {
        setcloseMenuWithClickOnItem(false)
        setIsOpen(true)
      } else {
        setIsOpen(false)
        setcloseMenuWithClickOnItem(!closeMenuWithClickOnItem)
      }
    }
    
    // Controlando execução da função    
    
    useEffect(() => {  
      window.addEventListener('resize', Mydebounce(resize, 100))
  
    }, [])

  }
  
  return { handleMenu, closeMenuWithClickOnItem, isOpen }

}

export default useHandleMenu
