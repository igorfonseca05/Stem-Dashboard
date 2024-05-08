
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
}