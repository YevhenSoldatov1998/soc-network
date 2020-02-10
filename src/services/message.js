import {instance} from "./instance";

export const dialogAPI = {
    getDialogs: () => {
        return instance.get('dialogs');
    },

};
export const messageAPI = {
    sendMessage: () => {
        return instance.post(`dialogs/1/messages`, { body:'Something message ...'})
    },

    getMessage: () => {
        return instance.get(`dialogs/1/messages`)
    },
}
