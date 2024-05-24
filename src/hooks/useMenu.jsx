import { useState, useEffect } from "react";

export function useMenu(location) {

    // console.log(location)

    const [isOpen, setIsOpen] = useState(false)
    const [menuClass, setMenuClass] = useState('fechado')

    const menu = document.querySelector('.nav-container')

    useEffect(() => {
        const isLoginOrSignUpPage = location === '/login' || location === '/SignUp'

        if (isLoginOrSignUpPage) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }

    }, [location])

    
    
    // Verificando estado da variavel isOpen e 
    // Selecionando a respectiva classe
    
    useEffect(() => {
        if (isOpen) {
            // console.log(isOpen)
            // This class add da open Meny transition
            setMenuClass('open')
    
        } else {
            // This class add the transition moviment
            setMenuClass('close')

            // This setTimeout is used to change the state's 
            // variable after the transition close to be finished
        }
    }, [isOpen])


    return { menuClass }

}
