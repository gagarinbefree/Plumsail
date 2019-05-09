import { IOrderFormState } from "../components/OrderForm";
import { Reducer, Action } from "redux"
import produce, { Draft } from "immer";
import { IAddChangeAction, IOrderFormPostAction } from "../actions/OrderForm";

const initalState: IOrderFormState = {
    type: "",
    payload: {
        index: 0,
        values: new Map<string, string>(),
        submitError: ""
    }
}

const OrderFormReducer: Reducer<IOrderFormState, Action> = (state: IOrderFormState = initalState, action: Action) => {
    return produce(state, (draft: Draft<IOrderFormState>) => {
        if (action.type === "ORDER_FORM_ADD_CHANGE") {
            const act = action as IAddChangeAction;
            draft.payload.values.set(act.fieldName, act.fieldValue);
            draft.payload.index++;
        }
        else if (action.type === "ORDER_FORM_SUBMIT") {
            const act = action as IOrderFormPostAction;
            draft.payload.submitError = act.submitError;
        }
    });
}

export default OrderFormReducer;