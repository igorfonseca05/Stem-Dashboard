
const useHandleMenu = () => {
    function handleCloseMenu() {
        const menu = document.querySelector('.nav-container')
        const icon = document.querySelector('.span-icon')


        if (menu.classList.contains('open')) {
          menu.classList.remove('open')
          menu.classList.add('close')
        } else {
          menu.classList.remove('close')
          menu.classList.add('open')
        }
    
        icon.classList.toggle('icon_spin')
      }

      return {handleCloseMenu}

}

  export default useHandleMenu 