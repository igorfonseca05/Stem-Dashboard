
import React from 'react'

import './DropDown.css'

function DropDown({title, link1, link2, link3, icon}) {

    function handleDropDown (e) {

            // console.log(e.target)
            const ul = document.querySelector('.dropDown-ul')

            // console.log(ul.children[0].clientHeight)

            ul.classList.toggle('active')
            ul.style.height = `${ul.children.length * ul.children[0].clientHeight + 25}px`

           ul.addEventListener('transitionend', (e) => {
            // console.log('oi')
           })
          
            const lis = [...ul.children]

            lis.forEach(li => {
                li.classList.toggle('hideLi')
            })
      
    }


    return (
        <div className='drop'>
            <li>
                <a className='main-link-menu' href="#" onClick={(e) => {handleDropDown(e)}}>
                    <span className="material-symbols-outlined">
                        {icon}
                    </span>{title}
                    <span className="material-symbols-outlined arrow-top">
                        expand_less
                    </span>
                </a>
            </li>
                <ul className='dropDown-ul'>
                    <li className='hideLi'><a href="#">{link1}</a></li>
                    <li className='hideLi'><a href="#">{link2}</a></li>
                    <li className='hideLi'><a href="#">{link3}</a></li>
                </ul>
        </div>
    )
}

export default DropDown