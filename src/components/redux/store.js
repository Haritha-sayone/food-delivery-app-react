import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";


const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store)

export default store;