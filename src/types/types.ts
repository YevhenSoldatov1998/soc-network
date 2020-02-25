export type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null| string
}
export type PhotosType ={
    small: null | string
    large: null| string
}
export type StateUserAPIType = {
    aboutMe: null | string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: null | string
    userId: null | number
    photos: PhotosType
}
export type InitialStateType = { //Profile initial state
    userAPI: StateUserAPIType
    posts: any
    isFetchingProfile: boolean
    status: string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
