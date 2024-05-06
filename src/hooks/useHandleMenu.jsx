
import { useEffect, useState } from "react"

import useDebounce from '../hooks/useDebounce'

function useHandleMenu(isToBeOpened) {
  const [ifToCloseOnClick, setIfToCloseOnClick] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  function handleMenu() {

    const {Mydebounce} = useDebounce()

    function resize() {

      if (window.innerWidth >= 1200) {
        setIfToCloseOnClick(false)
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }
    

    // Controlando execução da função

    if(isToBeOpened) {
      window.addEventListener('resize', Mydebounce(resize, 200))
    } else {
      
    }

    useEffect(() => {   

      resize()

    }, [])

  }
  
  return { handleMenu, ifToCloseOnClick, isOpen }

}

export default useHandleMenu
