// import { combineReducers } from "redux";
// const rootReducer = combineReducers({});


const initialState = {
    cartCount: 0,
    cartItems: [],
    itemQty: 0,
    totalPrice: 0
}
const rootReducer = (prevState = initialState, action) => {
    const itemIndex = prevState.cartItems.findIndex(item => item.id === action.payload.id);
    console.log(itemIndex);
    // const itemFound=prevState.cartItems.find(item=>item.id===action.payload.id);
    // console.log("itemFound=",itemFound);
    switch (action.type) {
        case 'addToCart':
            return {
                ...prevState,
                cartCount: itemIndex < 0 ? prevState.cartCount + 1 : prevState.cartCount,
                cartItems: itemIndex < 0 ? [...prevState.cartItems, action.payload.product] : prevState.cartItems,//newproduct
                itemQty: itemIndex >= 0 ? Number(prevState.itemQty) + Number(action.payload.qty) : action.payload.qty,
                totalPrice: prevState.totalPrice + action.payload.total
            }
        case 'removeFromCart':
            return {
                ...prevState,
                cartCount: prevState.cartCount - 1,
                cartItems: prevState.cartItems.filter(item => item.id !== action.payload.id),

            }
        default:
            return prevState;
    }
}

export default rootReducer;