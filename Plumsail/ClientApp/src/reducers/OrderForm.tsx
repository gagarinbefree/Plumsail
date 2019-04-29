import { IOrderFormState } from "../components/OrderForm";
import { ISendOrderFormAction } from "../actions/OrderForm";
import { Action } from "redux";
import produce from "immer";

const initalState: IOrderFormState = {
    type: "",
    payload: {
        showOrderForm: false
    }
}

const OrderFormReducer = (state: IOrderFormState = initalState, action: ISendOrderFormAction) => produce(state, draft => {
    if (action.type === "ORDER_FORM_SEND") {        

    }
});

export default OrderFormReducer;