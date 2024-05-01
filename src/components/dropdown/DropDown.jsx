
import React, { useEffect, useState, useRef } from 'react'

// import './DropDown.css'
import "./StyleDropDown.css"
import { Link } from 'react-router-dom'

function DropDown({ title, links, icon }) {

    const [isOpen, setOPen] = useState(false)
    const dropItemContainerRef = useRef(null)

    function toggleDropDown() {
        setOPen(!isOpen)
    }

    function get_Ul_Internal_Size() {
        if (dropItemContainerRef.current) {
            if (dropItemContainerRef.current) {
                const ulComponentInternalSize = dropItemContainerRef.current.scrollHeight;
                return ulComponentInternalSize;
            }
            return 0;
        }
    }

    function createDropDownAnimation(inicialSize, finalSize) {
        if(dropItemContainerRef) {
            const container = dropItemContainerRef.current
            const keyFrame = [
                { height: `${inicialSize}px` },
                { height: `${finalSize}px` },
            ]
    
            const animationConfig = { duration: 300, fill: 'forwards' }
    
            container.animate(keyFrame, animationConfig)
        
        }
    }


    function toggleDropDown() {
        setOPen(!isOpen)
    }

    function handleDropDown(e) {
        e.preventDefault()
        toggleDropDown()

        const tagLink = e.currentTarget
        const dropDownArrow = tagLink.querySelector('.drop-arrow')

        if (isOpen) {
            dropDownArrow.classList.remove('rotateArrow');
            createDropDownAnimation(get_Ul_Internal_Size(), 0)

        } else {
            dropDownArrow.classList.add('rotateArrow');
            createDropDownAnimation(0, get_Ul_Internal_Size())
        }

    }

    return (
        <div className='drop'>
            <li className='front'>
                <a data-js='link' className={`main-link-menu link ${isOpen ? 'link' : ''}`}
                    href="#" onClick={handleDropDown}>
                    <div className='icon-title-container link'>
                        <span className="material-symbols-outlined">
                            {icon}
                        </span>{title}
                    </div>
                    <span className={`material-symbols-outlined drop-arrow ${isOpen ? 'rotateArrow' : ''}`}>
                        expand_less
                    </span>
                </a>
            </li>
            <div className='drop-item-container' ref={dropItemContainerRef}>
                <ul className='dropDown-ul'>
                    {links?.map((link, i) => (
                        <li key={i}><Link to={`/store/${link}`}>{link}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DropDown