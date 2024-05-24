import { useState, useEffect } from "react";

import useDebounce from "./useDebounce";

export function useMenu(location) {

    const { Mydebounce } = useDebounce()
    const [pageResize, setPageResize] = useState(null)

    const [isOpen, setIsOpen] = useState(false)
    const [menuClass, setMenuClass] = useState('fechado')

    const [hideMenu, setHideMenu] = useState(true)

    useEffect(() => {
        const isLoginOrSignUpPage = location === '/login' || location === '/SignUp'

        if (isLoginOrSignUpPage) {
            setIsOpen(false)
            // console.log('aqui')
        } else {
            setIsOpen(true)
        }

    }, [location])

    useEffect(() => {
        if (isOpen) {
            setMenuClass('open')
        } else if (hideMenu) {
            setMenuClass('fechado')
        } else {
            setMenuClass('close')
        }
    }, [isOpen])


    function handleStateResize() {
        setPageResize(true)

        setTimeout(() => {
            setPageResize(false)
        }, 100)
    }

    useEffect(() => {
        if (window.innerWidth >= 1200) {
            console.log('oi')
        }
    }, [pageResize])

    window.addEventListener('resize', Mydebounce(handleStateResize, 500))


    return {menuClass}
}
