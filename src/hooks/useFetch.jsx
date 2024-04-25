import { useState, useEffect } from "react";

export function useFetch(url) {

    const [data, setData] = useState(null) 


    useEffect(() => {
        async function getData() {

            try {
                const res = await fetch(url)

                setData(res)

            } catch (error) {
                console.log(error.message)
            }
        }

        getData()
    }, [url])

    return {data}

}