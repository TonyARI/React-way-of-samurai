import axios from "axios";

let instance=axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': "9be5ee11-4431-4cf6-8a54-f8e6aac1195e"
    }
})

export const UserAPI={
    getUsers (currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data);
    },
    follow (id){
        return instance.post(`follow/${id}`).then(response=>response.data)
    },
    unfollow (id) {
        return instance.delete(`follow/${id}`).then(response=>response.data)
    },
    setProfile (id) {
        return instance.get(`profile/${id}`).then(response=>response.data)
    }
}

export const Auth={
    me() {
        return instance.get(`auth/me`).then(response=>response.data)
    },
    authMe(email, password, rememberMe) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe}).then(response=>response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response=>response.data)
    }
}

export const Profile={
    getStatus(id) {
        return instance.get(`profile/status/${id}`).then(response=>response.data);
    },
    setMyStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response=>response.data)
    }
}


