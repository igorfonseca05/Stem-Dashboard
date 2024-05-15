import {app} from '../../firebase/config.js'

import { getDatabase, onValue, ref, set } from "firebase/database";

import { useAuthentication } from './useAuthentication.jsx';
import { useState } from 'react';

export function useRealTimeDataBase() { 

    const dataBase = getDatabase(app)

    function setData(data, userId) {
        set(ref(dataBase, `Color/` + userId), {
            colorTwo: data
        })
    }

    function getData (userId) {
        onValue(ref(dataBase, `Color/` + userId), (snapshot) => {
            const data = snapshot.val()
            // console.log(data?.colorTwo)
            return data?.colorTwo
            
        })
    }

    return {setData, getData}

}