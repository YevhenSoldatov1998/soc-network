import {instance} from "./instance";
export const getCaptchaUrl = () => {
    return instance.get('security/get-captcha-url').then(res => res.data.url)
}
