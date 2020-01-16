import {instance} from "./instance";

export const UsersAPI = {
    getUser(page, count) {
        return instance.get(`users?page=${page}&count=${count}`).then(res => res.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`, {}).then(res => res.data)
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`, {}).then(res => res.data)
    }
};
