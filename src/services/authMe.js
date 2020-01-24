import {instance} from "./instance";

export const authMeAPI = {
    authMe() {
        return instance.get('auth/me')
    },
    signIn(email, password, rememberMe, captcha) {
        return instance.post('auth/login', {email , password , rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    }
};
