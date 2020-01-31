export const updateObjectInArray = (items, itemId, objPropName, newValue) => {
   return items.map(e => {
       debugger
        if (e[objPropName] === itemId) {
            return {...e, ...newValue}
        }
        return {...e}
    })
}
