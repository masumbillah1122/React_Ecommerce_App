//For Add Item form Cart
export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product,
    }
}

//For Delete Item form Cart
export const deleteCart = (product) => {
    return {
        type: 'DELETEITEM',
        payload: product,
    }
}