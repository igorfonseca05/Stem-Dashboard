import { useState, useEffect } from "react";

export function useFetch(url) {

    const [data, setData] = useState(null) 
    const [loading, setLoading] = useState(false) 
    const [error, setError] = useState(null) 


    useEffect(() => {
        async function getData() {

            setLoading(true)

            try {
                const res = await fetch(url)

                if(!res.ok) {
                    throw new Error('Erro ao obter jogos')
                }

                const data = await res.json()

                setData(data)

            } catch (error) {
                console.log(error.message)

                setError(error.message)

            }

            setLoading(false)
        }

        getData()
    }, [])

    return {data, loading, error}

}