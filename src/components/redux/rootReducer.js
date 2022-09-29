import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "cart",
    storage
}

const initialState = {
    cartCount: 0,
    cartItems: [],
    totalPrice: 0
}
const rootReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'addToCart':
            const existingItem = prevState.cartItems.find(item => item.id === action.payload.itemId);
            return {
                ...prevState,
                cartCount: existingItem ? prevState.cartCount : prevState.cartCount + 1,
                cartItems: existingItem ? prevState.cartItems : [...prevState.cartItems, action.payload.product],
                totalPrice: prevState.totalPrice + action.payload.total,
                // itemQty: existingItem ? Number(prevState.itemQty)+Number(action.payload.qty) : action.payload.qty
            }
        case 'removeFromCart':
            return {
                ...prevState,
                cartCount: prevState.cartCount - 1,
                cartItems: prevState.cartItems.filter(item => item.id !== action.payload.id),
                totalPrice: prevState.totalPrice - action.payload.netAmount
            }
        default:
            return prevState;
    }
}

export default persistReducer(persistConfig, rootReducer);