const DRAW_SIDEBAR = 'DRAW_SIDEBAR'
export const reducerSidebarCreator = () => ({type: DRAW_SIDEBAR})
const INITIAL_STATE = {
    navLink: [
        {link: 'Profile', id: 1},
        {link: 'Messages', id: 2},
        {link: 'News', id: 3},
        {link: 'Music', id: 4},
        {link: 'Users', id: 5},
        {link: 'Setting', id: 6},
    ]

}
const sidebarReducer = (state = INITIAL_STATE, action) => {
    return state
}
export default sidebarReducer
