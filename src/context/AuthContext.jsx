import { createContext, useContext } from "react";

export const authContext = createContext()

export function AuthProvider ({children, value}) {
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}

export function useAuthProvider () {
    return useContext(authContext)
}