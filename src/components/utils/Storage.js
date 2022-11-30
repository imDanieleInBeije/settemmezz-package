import { Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFromStorage = async (keyword) => {

    if(Platform.OS === "web"){
        
        if(keyword === 'userID') {
            if(sessionStorage.getItem(keyword)){
                let value = JSON.parse(sessionStorage.getItem(keyword));
                return value
            }else{
                sessionStorage.setItem(keyword,[])
            }
        } else {
            if(localStorage.getItem(keyword)){
                let value = JSON.parse(localStorage.getItem(keyword));
                return value
            }else{
                localStorage.setItem(keyword,[])
            }
        }

    }
    else if(Platform.OS === "ios" || Platform.OS === "android"){

        try{
            const jsonValue = await AsyncStorage.getItem(keyword)

            if(jsonValue !== null){
                return JSON.parse(jsonValue)
            }else{
                await AsyncStorage.setItem(keyword,[])
            }
        }catch(e){
            console.log(e);
        }
    }
}

export const setInStorage = async (keyword,value) => {
    if(Platform.OS === "web"){
        if(keyword==='userID') sessionStorage.setItem(keyword,JSON.stringify(value))
        else localStorage.setItem(keyword,JSON.stringify(value))
    }
    else if(Platform.OS === "ios" || Platform.OS === "android"){
        try{
           await AsyncStorage.setItem(keyword,JSON.stringify(value))
        }catch(e){
            console.log(e);
        }
    }
}