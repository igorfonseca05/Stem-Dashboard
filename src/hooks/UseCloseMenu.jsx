
import { useEffect } from "react"

function useMenu(action) {

  function handleMenu() {
    useEffect(() => {
      const menu = document.querySelector('.nav-container')

      const isToRemove = action === 'remove'

      if (isToRemove) {
        menu.classList.remove('open')
        menu.classList.add('close')
      } else {
        menu.classList.remove('close')
        menu.classList.add('open')
      }

    }, [])
  }

  return { handleMenu }

}

export default useMenu