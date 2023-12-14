import axios from 'axios';

const BASE_URL = `${process.env.NEXT_PUBLIC_HOST}/userapp`;
let TOKEN
try{
 TOKEN = localStorage.getItem("accessToken") || ""
}catch(err){
    console.log(err)
}

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const privateRequest = axios.create({
    baseURL: BASE_URL,
    Headers:{Authorization:`Bearer ${TOKEN}`}
})