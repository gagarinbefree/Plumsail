import { IOrderFormState } from "../components/OrderForm";
import { Reducer, Action } from "redux"
import produce, { Draft } from "immer";
import { IAddChangeAction } from "../actions/OrderForm";

const initalState: IOrderFormState = {
    type: "",
    payload: {
        values: new Map<string, string>()
    }
}

const OrderFormReducer: Reducer<IOrderFormState, Action> = (state: IOrderFormState = initalState, action: Action) => {
    return produce(state, (draft: Draft<IOrderFormState>) => {
        if (action.type === "ORDER_FORM_ADD_CHANGE") {
            const act = action as IAddChangeAction;
            draft.payload.values.set(act.fieldName, act.fieldValue);
        }
    });
}

export default OrderFormReducer;