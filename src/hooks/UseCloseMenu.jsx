
import { useEffect, useState } from "react"

export function useMenu(location) {

  // const [isOpen, setIsOpen] = useState(true)
  // const [SizeScreen, setSizeScreen] = useState()
  const [isOpen, setIsOpen] = useState(false)
  
  function handleMenu() {
    
    useEffect(() => {

      const menu = document.querySelector('.nav-container')
      const top_menu = document.querySelector('.top-menu')

      if(location === '/login' || location === '/SignUp') {
        menu.style.display = 'none' 
        top_menu.style.display = 'none' 
    }

    }, [])

  }

  return { handleMenu, isOpen}
}

export default useMenu