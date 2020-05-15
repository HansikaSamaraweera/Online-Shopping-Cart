const initialState = {
    wishList: []
};

const reducer = (state = initialState, action) => {

    let wishList = state.wishList;

    switch(action.type) {

        case 'ADD_TO_WISH':

            wishList.push(action.payload);

            return {
                ...state,
                wishList: wishList
            };

        case 'REMOVE_FROM_WISH':
            return {
                ...state,
                wishList: wishList.filter(item => item.product.id != action.payload.productId)
            };
        default:
            return state;
    }
};

export default reducer;