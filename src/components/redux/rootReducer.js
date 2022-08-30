import { combineReducers } from "redux";


// const rootReducer = combineReducers({});

const initialState = {
    totalCount: 0
}
const rootReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'incrementTotalCount':
            return {
                ...prevState,
                totalCount: prevState.totalCount + 1
            };
        case 'decrementTotalCount':
            return {
                ...prevState,
                totalCount:prevState.totalCount-1
            }
        default:
            return prevState;
    }
}

export default rootReducer;