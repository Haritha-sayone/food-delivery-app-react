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
    // const itemIndex = prevState.cartItems.findIndex(item => item.id === action.payload.id);
    // console.log(itemIndex);
    // const itemFound=prevState.cartItems.find(item=>item.id===action.payload.id);
    // console.log("itemFound=",itemFound);
    switch (action.type) {
        case 'addToCart':
            const existingItem = prevState.cartItems.find(item => item.id === action.payload.itemId);
            console.log("item = ", existingItem);
            return {
                ...prevState,
                // cartCount: itemIndex < 0 ? prevState.cartCount + 1 : prevState.cartCount,
                // cartItems: itemIndex < 0 ? [...prevState.cartItems, action.payload.product] : prevState.cartItems,//newproduct
                // itemQty: itemIndex >= 0 ? Number(prevState.itemQty) + Number(action.payload.qty) : action.payload.qty,
                // totalPrice: prevState.totalPrice + action.payload.total
                cartCount: existingItem ? prevState.cartCount : prevState.cartCount + 1,
                cartItems: existingItem ? prevState.cartItems : [...prevState.cartItems, action.payload.product],
                totalPrice: prevState.totalPrice + action.payload.total
                // cartCount: item ? prevState.cartCount : prevState.cartCount + 1,
                // cartItems: item ? prevState.cartItems : [...prevState.cartItems, action.payload.product],
                // itemQty: item ? Number(prevState.itemQty)+Number(action.payload.qty) : action.payload.qty,
                // totalPrice: prevState.totalPrice + action.payload.total
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

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);