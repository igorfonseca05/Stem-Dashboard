
import {useState} from 'react'


import "./HorizontalMenu.css"
import useHandleMenu from '../../hooks/useHandleMenu'

function HorizontalMenu() {

    const handleCloseMenu = useHandleMenu()

    const [size, setSize] = useState(false)
  
    function screenSize() {
  
      // const isBetween = window.innerWidth >= 9 || 
  
      if (window.innerWidth < 925) {
        setSize(true)
        window.removeEventListener('resize', screenSize)
      } else {
        setSize(false)
        window.addEventListener('resize', screenSize)
      }
    }
    window.addEventListener('resize', screenSize)
  
    
    return (
        <div className='top-menu'>
            <div className='logo'>
                <img src="pngegg (4).png" alt="" />
                <h2>STEAM</h2>
            </div>
            <span className="material-symbols-outlined menuButton span-icon-2" onClick={(e) => { handleCloseMenu() }}>
                menu
            </span>
            <form className='external-form'>
                <label>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                    <input type="text" placeholder='Search here...' />
                </label>
            </form>
            <div className='top-menu-user'>
                <figure>
                    <img src="https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2023/02/14175424/woody-1.jpg" alt="" />
                </figure>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Igor Fonseca
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Perfil</a></li>
                        <li><a className="dropdown-item" href="#">Lançamentos</a></li>
                        <li><a className="dropdown-item" href="#">Configurações</a></li>
                        <li className='li-form-container'>
                            <form className='internal-form'>
                                <label>
                                    <span className="material-symbols-outlined">
                                        search
                                    </span>
                                    <input type="text" placeholder='Search here...' />
                                </label>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HorizontalMenu