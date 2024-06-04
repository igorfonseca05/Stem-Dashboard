
import { useEffect, useState } from "react";
import { useRealTimeDataBase } from "./useRealTimeDataBase";
import { useAuthProvider } from "../context/AuthContext";

export function getData (collection, document) {

    const [data, setData] = useState({})

    function showData(dataFromDB) {
        setData(dataFromDB)
    }
    

    const {getData} = useRealTimeDataBase()

    useEffect (() => {getData(showData, `${collection}`, `${document}`)}, [])

    // console.log(data)

    return {data}
}
