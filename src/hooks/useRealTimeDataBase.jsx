import { app } from '../../firebase/config.js'

import { getDatabase, onValue, ref, set } from "firebase/database";

import { useAuthentication } from './useAuthentication.jsx';
import { useEffect, useState } from 'react';

import { useAuthProvider } from '../context/AuthContext.jsx';

export function useRealTimeDataBase() {

    const [data, setDataToExport] = useState({})

    const user = useAuthProvider()

    const dataBase = getDatabase(app)

    function setData(collection, document, data, profileImage, backgroundImg) {
            set(ref(dataBase, `${collection}/` + user?.uid + `/${document}`), {
                profileName: data,
                imgProfile: profileImage,
                bgImg: backgroundImg
            }) 
    }

    function getData(callback ,collection, document = '') {
        onValue(ref(dataBase, `${collection}/` + user?.uid + `/${document}` ), (snapshot) => {
            const data = snapshot.val()
            // console.log(data?.colorTwo)

            callback(data)

        })
    }

    return { setData, getData}

}