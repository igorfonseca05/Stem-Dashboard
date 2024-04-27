import { useState, useEffect } from "react";

export function useFetch(url) {

    const [data, setData] = useState(undefined) 


    useEffect(() => {
        async function getData() {

            try {
                const res = await fetch(url)

                if(!res.ok) {
                    throw new Error('Erro ao obter jogos')
                }

                const data = await res.json()

                setData(data)

            } catch (error) {
                console.log(error.message)
            }
        }

        getData()
    }, [])

    return {data}

}