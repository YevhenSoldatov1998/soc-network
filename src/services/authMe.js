import {instance} from "./instance";

export const authMeAPI ={
    authMe(){
        return instance.get('auth/me')
    },
    signIn(formData){
        return instance.post('auth/login',{formData})
    }
};
