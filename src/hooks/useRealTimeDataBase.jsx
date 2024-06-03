import { app } from '../../firebase/config.js'

import { getDatabase, onValue, ref, set } from "firebase/database";

import { useAuthentication } from './useAuthentication.jsx';
import { useState } from 'react';

import { useAuthProvider } from '../context/AuthContext.jsx';

export function useRealTimeDataBase() {

    const user = useAuthProvider()

    const dataBase = getDatabase(app)

    function setData(collection,data, profileImage) {
        if (collection === 'Color/') {
            set(ref(dataBase, collection + user?.uid), {
                color: data
            })
        } else {
            set(ref(dataBase, collection + user?.uid), {
                profileName: data,
                profile_picture: profileImage,
            }) 
        }
    }

    function getData(getColor, collection) {
        onValue(ref(dataBase, collection + user?.uid), (snapshot) => {
            const data = snapshot.val()
            // console.log(data?.colorTwo)

            getColor(data)

        })
    }

    return { setData, getData }

}