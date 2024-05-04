

const useIconMenuClose = () => {
  let menu;

  //Remover classe
  function removeClassAfterToClose() {
    setTimeout(() => {
      menu.classList.remove('close')
      menu.classList.add('fechado')

    }, 400)
  }

  function handleCloseMenu() {
    menu = document.querySelector('.nav-container')
    const icon = document.querySelector('.span-icon')


    if (menu.classList.contains('fechado')) {
      menu.classList.remove('fechado')
    }

    if (menu.classList.contains('open')) {
      menu.classList.remove('open')
      menu.classList.add('close')

      removeClassAfterToClose()

    } else {
      // menu.classList.remove('close')
      menu.classList.add('open')
    }

    icon.classList.toggle('icon_spin')
  }

  return { handleCloseMenu }

}

export default useIconMenuClose 