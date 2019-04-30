import { IOrderFormState } from "../components/OrderForm";
import { ISendOrderFormAction } from "../actions/OrderForm";
import { Reducer, Action } from "redux"
import produce, { Draft } from "immer";

const initalState: IOrderFormState = {
    type: "",
    payload: {
        showOrderForm: false
    }
}

const OrderFormReducer: Reducer<IOrderFormState, Action> = (state: IOrderFormState = initalState, action: Action) => {
    return produce(state, (draft: Draft<IOrderFormState>) => {
        if (action.type === "ORDER_FORM_SEND") {
            const act = action as ISendOrderFormAction;
            console.log(`form is send. ${act.error}`);
        }
    });
}

export default OrderFormReducer;