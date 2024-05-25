import { useState, useEffect } from "react";

import useDebounce from "./useDebounce";

export function useMenu(location) {

    const { Mydebounce } = useDebounce()
    const [pageResize, setPageResize] = useState(null)

    const [isOpen, setIsOpen] = useState(false)
    const [menuClass, setMenuClass] = useState('fechado')

    const [hideMenu, setHideMenu] = useState(true)

    const menu = document.querySelector('.nav-container')

    // console.log(menu)
    
    function handleStateResize() {
        setPageResize(true)

        setTimeout(() => {
            setPageResize(false)
        }, 100)
    }

    // useEffect(() => {
    //     if (window.innerWidth < 1200) {
    //         setMenuClass('nav-container close')
            
    //         setTimeout(() => {
    //             setMenuClass('nav-container fechado')
    //         }, 500)
    //     } else {
    //         setMenuClass('nav-container open')
    //     }
    // }, [pageResize])

    window.addEventListener('resize', Mydebounce(handleStateResize, 500))

    useEffect(() => {
        const isLoginOrSignUpPage = location === '/login' || location === '/SignUp'

        if (isLoginOrSignUpPage || window.innerWidth < 1200) {
            setIsOpen(false)
            // console.log('aqui')
        } else {
            setIsOpen(true)
        }

    }, [location, pageResize])

    useEffect(() => {
        if (isOpen) {
            setMenuClass('open')
        } else if (hideMenu) {
            setMenuClass('fechado')
        } else {
            setMenuClass('close')
        }
    }, [isOpen])


    return {menuClass}
}
