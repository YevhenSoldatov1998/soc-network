import {instance} from "./instance";

export const authMeAPI = {
    authMe() {
        return instance.get('auth/me')
    },
    signIn(email, password, rememberMe) {
        debugger
        return instance.post('auth/login', {email , password , rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
};
