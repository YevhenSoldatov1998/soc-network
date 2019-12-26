const initialState = {
    users: [
        {id: 1, isFollow: false, name: 'Alex', lastName: 'Merser', status: 'I am FrontEnd developer', country: 'Ukraine', location: 'Lviv'},
        {id: 2, isFollow: false, name: 'John', lastName: 'Keiv', status: 'I am BackEnd developer', country: 'USA', location: 'New York'},
        {id: 3, isFollow: true, name: 'Anastasia', lastName: 'Kovtun', status: 'I am not developer', country: 'Ukraine', location: 'Lviv'},
    ]
}
const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default reducerUsers
