import {instance} from "./instance";

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}
