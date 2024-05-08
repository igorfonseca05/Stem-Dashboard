
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
     updateProfile,
    signOut,
} from 'firebase/auth'

import {useState, useEffect} from 'react'

export function useAuthentication() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [success, setSuccess] = useState(null)

    // cleanUp
    /** deal with memory leak */
    const [cancelled, setCancelled] =  useState(false)

    const auth = getAuth()

    function checkIfIsCancelled () {
        if(cancelled) return
    }

    async function createUser (userData) {
        useEffect(() => {

        }, [])
    }


}