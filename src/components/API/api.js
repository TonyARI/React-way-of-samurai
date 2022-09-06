import axios from "axios";

let instance=axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': "9be5ee11-4431-4cf6-8a54-f8e6aac1195e"
    }
})

export const getUsers=(currentPage=1, pageSize=10)=>{
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data);
}

