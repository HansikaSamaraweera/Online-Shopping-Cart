export const addToWishList = (product) => {

    return {
        type: 'ADD_TO_WISH',
        payload: {
            product
        }
    }
};

export const removeFromWishList = (productId) => {

    return {
        type: 'REMOVE_FROM_WISH',
        payload: {
            productId: productId
        }
    }
};
