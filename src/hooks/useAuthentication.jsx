
import { app } from '../../firebase/config.js'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import { refFromURL } from 'firebase/database'

import { useState, useEffect } from 'react'

import { useRealTimeDataBase } from './useRealTimeDataBase.jsx'

export function useAuthentication() {

    const { setData } = useRealTimeDataBase()

    //adding variables which we will work with
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [success, setSuccess] = useState(null)

    //Avoid memory leak
    const [cancelled, setCancelled] = useState(false)

    function checkIfCancelled() {
        if (cancelled) return
    }

    const auth = getAuth()
    auth.useDeviceLanguage();

    // creating the function that create users
    async function createUser({ username, email, password }) {
        checkIfCancelled()

        setLoading(!loading)
        setError(null)

        try {

            const { user } = await createUserWithEmailAndPassword(auth, email, password)

            updateProfile(user, { displayName: username })

            setError(null)
            setSuccess('Usuário criado com sucesso')
            setLoading(loading)
            return user

        } catch (error) {
            // console.log(error.message)
            // console.log(typeof error.message)

            let errorSystem

            if (error.message.includes('auth/weak-password')) {
                errorSystem = 'Senha precisa ter pelo menos 6 caracteres'
            } else if (error.message.includes('auth/invalid-email')) {
                errorSystem = 'Por favor, insira um endereço de e-mail válido'
            } else if (error.message.includes('auth/email-already-in-use')) {
                errorSystem = 'Este e-mail já está em uso. Por favor, use outro.'
            } else {
                console.log(error)
            }

            setSuccess(null)
            setError(errorSystem)
            setLoading(loading)
        } finally {
            setLoading(loading)
        }
    }


    async function SignInUser({ email, password }) {
        checkIfCancelled()

        setLoading(!loading)

        try {
            const res = await signInWithEmailAndPassword(auth, email, password)

            setLoading(loading)
            // setSuccess('')
            return res

        } catch (error) {
            console.log(error.message)

            let errorSystem;

            if (error.message.includes('auth/invalid-credential')) {
                errorSystem = 'O email ou senha inseridos estão incorretos.'
            }

            setError(errorSystem)

            setLoading(loading)
        } finally {
            setLoading(loading)
        }

    }


    async function loginWithGoogle() {
        checkIfCancelled()

        const provider = new GoogleAuthProvider();

        try {
            const res = await signInWithPopup(auth, provider)

            if (!res.ok) {
                throw new Error('Não foi possível acessar usando o google')
            }

            console.log(res)
        } catch (error) {
            setError(error.message)
        }

    }

    function handleSignOut() {
        checkIfCancelled()
        signOut(auth)
    }


    async function updateInfos(dados) {
        checkIfCancelled()

        setLoading(!loading)
        setError('')

        const { imgProfile, userName, phoneNumber} = dados

        // console.log(phoneNumber)

        try {
            updateProfile(auth.currentUser, {
                displayName: userName,
                photoURL: imgProfile,
                phoneNumber: phoneNumber,
            })

            setData('UserName', 'infosProfile', dados)

            setSuccess('Profile updated')
            setLoading(loading)

        } catch (error) {
            console.log(error)
            setError(error.message)
        }

        setLoading(loading)

    }

    useEffect(() => {
        return () => setCancelled(true);
    }, [])


    return {
        auth,
        createUser,
        loading,
        success,
        error,
        signOut,
        SignInUser,
        loginWithGoogle,
        updateInfos,
        onAuthStateChanged,
        handleSignOut
    }
}
