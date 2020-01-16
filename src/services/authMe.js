import {instance} from "./instance";

export const authMeAPI ={
    authMe(){
        return instance.get('auth/me').then(res => res.data)
    }
};
