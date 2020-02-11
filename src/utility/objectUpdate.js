export const updateObjectInArray = (items, itemId, objPropName, newValue) => {
   return items.map(e => {
        if (e[objPropName] === itemId) {
            return {...e, ...newValue}
        }
        return {...e}
    })
}
