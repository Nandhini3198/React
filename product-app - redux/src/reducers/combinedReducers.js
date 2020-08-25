import { combineReducers } from "redux";
import productReducer from "./productReducers";
//import userReducer from "./userReducers";
const reducers = combineReducers({
    productList: productReducer
})

export default reducers;