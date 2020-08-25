let productList = []
const productReducer = (state = null, action) => {
    switch (action.type) {
        case 'INITIAL_FETCH':
            productList = action.payload
            break;
        case 'ADD_PRODUCT':
            let newData = action.payload
            productList.push(newData)
            break;
        case 'EDIT_PRODUCT':
            let prod= action.payload
            let data = {
                pname: prod.pname,
                type: prod.type,
                availability: prod.availability,
                price: prod.price,
                image:prod.image
            }
            let indices = productList.findIndex(product => product.id === prod.id)
            productList[indices] = data
            break;
        case 'DELETE_PRODUCT':
            let id = action.payload
            let newList = productList.filter(product => product.id !== id)
            productList = newList
            break;
        default:
            break;
    }
    return productList
}
export default productReducer