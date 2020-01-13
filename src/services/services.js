import * as axios from "axios";

export const getUsersAPI = (page , count) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
}

export const authMe = () => {
    return  axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',   {
      withCredentials: true,
      headers: {
        "API-KEY": "4d389a32-8ea5-4b24-aed0-dbacf4d70989"
      }
    })
}
