import {instance} from "./instance";
export const dialogAPI = {
    getDialogs: () => {
        return instance.get('dialogs');
    }
}
