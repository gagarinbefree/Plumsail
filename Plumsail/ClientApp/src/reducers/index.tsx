import AppReducer from "../reducers/App";
import OrderFormReducer from "../reducers/OrderForm";
import OrderListReducer from "../reducers/OrderList";
import { combineReducers } from "redux";

export default combineReducers({
    AppReducer,
    OrderFormReducer,
    OrderListReducer
});