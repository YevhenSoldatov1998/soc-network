import * as axios from "axios";

export const getUsersAPI = (page, count) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}` , {
    withCredentials: true,
    headers: {
      "API-KEY": "4d389a32-8ea5-4b24-aed0-dbacf4d70989"
    }
  })
}

export const authMe = () => {
  return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
    withCredentials: true,
    headers: {
      "API-KEY": "4d389a32-8ea5-4b24-aed0-dbacf4d70989"
    }
  })
}
export const follow = (id) => {
  return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
    withCredentials: true,
    headers: {
      "API-KEY": "4d389a32-8ea5-4b24-aed0-dbacf4d70989"
    }
  })
};
export const unFollow = (id) => {
  return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{
    withCredentials: true,
    headers: {
      "API-KEY": "4d389a32-8ea5-4b24-aed0-dbacf4d70989"
    }
  })
};

