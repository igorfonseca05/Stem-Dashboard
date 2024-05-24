import { useState, useEffect } from "react";

export function useMenu(location) {

    // console.log(location)

    const [isOpen, setIsOpen] = useState(false)
    const [menuClass, setMenuClass] = useState('fechado')

    const [hideMenu, setHideMenu] = useState(true)

    const menu = document.querySelector('.nav-container')

    useEffect(() => {
        const isLoginOrSignUpPage = location === '/login' || location === '/SignUp'

        if (isLoginOrSignUpPage) {
            setIsOpen(false)
            // console.log('aqui')
        } else {
            setIsOpen(true)
        }

    }, [location])

// :    console.log(hideMenu)

    // Verificando estado da variavel isOpen e 
    // Selecionando a respectiva classe
    
    useEffect(() => {
        if (isOpen) {
            // This class add da open Meny transition
            setMenuClass('open')
        } else if(hideMenu) {
            setMenuClass('fechado')
        } else {
            setMenuClass('close')

        }
    }, [isOpen, hideMenu])


    return { menuClass }

}
