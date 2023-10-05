export const initialState = {
    basket: [],
    user: null
};

//selector
export const getBasketTotal = (basket) =>
    basket?.reduce((item, amount) => item.price+amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "addToBasket":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "removeFromBasket":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product id: ${action.id}. It is not in basket.`
                );
            }
            return {
                ...state,
                basket: newBasket
            }
        case "setUser":
            return {...state,user:action.user};
            
        default:
            return state;
    }
};

export default reducer;