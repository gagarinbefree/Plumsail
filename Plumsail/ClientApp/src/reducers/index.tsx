import AppReducer from "../reducers/App";
import OrderFormReducer from "../reducers/OrderForm";
import { combineReducers } from "redux";

export default combineReducers({
    AppReducer,
    OrderFormReducer
});