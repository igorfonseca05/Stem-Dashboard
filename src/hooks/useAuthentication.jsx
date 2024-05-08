
import {db} from '../../firebase/config'

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
    //adding variables which we will work with
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [success, setSuccess] = useState(null)

    //Avoid memory leak
    const [cancelled, setCancelled] =  useState(false)

    function checkIfCancelled () {
        if(cancelled) return
    }

    // creating the function that create users

    async function createUser({username, email, password}) {
        checkIfCancelled()

        setLoading(true)

        try {

            const {user} = await createUserWithEmailAndPassword(auth, email, password)

            updateProfile(user, {displayName: username})

            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)
            
        }

        setLoading(false)

        return {auth, createUser, loading, success, error}
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

}