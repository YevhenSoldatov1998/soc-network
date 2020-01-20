import {instance} from "./instance";

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId){
        return instance.get(`profile/status/`+ userId).then(res => res.data)
    },
    setUserStatus(status){
        return instance.put(`profile/status`, {status})
    }

}
