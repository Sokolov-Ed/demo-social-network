import React from "react";
import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3208ca02-74e8-460f-ad52-2022af0286c5"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },
    getFollow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    getUnfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    getUser(id) {
        return instance.get(`profile/${id}`).then(response => {
            return response.data
        })
    },
    getAuthMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    }
}

export const authMe = {
    login(email, password, rememberMe = false, captcha = false){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    saveMyPhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}