import {instance} from "./instance";

export const dialogAPI = {
    getDialogs: () => {
        return instance.get('dialogs').then(res=>res.data);
    },
    putUpDialog: (userId) => {
        return instance.put(`dialogs/${userId}`);
    }

};
export const messageAPI = {
    sendMessage: (userId, body) => {
        return instance.post(`dialogs/${userId}/messages`, {body}).then(res=> res.data)
    },
    getMessages: (userId) => {
        return instance.get(`dialogs/${userId}/messages`).then(res=>res.data)
    },
    deleteMessage: (messageId) => {
        return instance.delete(`dialogs/messages/${messageId}`)
    }
};
