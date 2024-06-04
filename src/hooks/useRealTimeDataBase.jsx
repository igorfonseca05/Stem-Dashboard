import { app } from '../../firebase/config.js'

import { getDatabase, onValue, ref, set } from "firebase/database";

import { useAuthentication } from './useAuthentication.jsx';
import { useEffect, useState } from 'react';

import { useAuthProvider } from '../context/AuthContext.jsx';

export function useRealTimeDataBase() {

    const [data, setDataToExport] = useState({})

    const user = useAuthProvider()

    const dataBase = getDatabase(app)

    function setData(collection, document, data) {

            const {   
                newProfileImage,
                newUserName, 
                backgroundImg,
                phoneNumber,
                country,
                bios} = data

            set(ref(dataBase, `${collection}/` + user?.uid + `/${document}`), {
                profileName: newUserName,
                imgProfile: newProfileImage,
                bgImg: backgroundImg,
                phoneNumber: phoneNumber,
                originCountry: country,
                description: bios
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