import { IOrderFormState, IOrderValue } from "../components/OrderForm";
import { Reducer, Action } from "redux"
import produce, { Draft } from "immer";
import { IAddChangeAction, IOrderFormPostAction } from "../actions/OrderForm";

const initalState: IOrderFormState = {
    type: "",
    payload: {
        values: [] as IOrderValue[],
        submitError: ""
    }
}

const OrderFormReducer: Reducer<IOrderFormState, Action> = (state: IOrderFormState = initalState, action: Action) => {
    return produce(state, (draft: Draft<IOrderFormState>) => {
        if (action.type === "ORDER_FORM_ADD_CHANGE") {
            const act = action as IAddChangeAction;

            const val: IOrderValue | undefined = draft.payload.values[act.key]
            if (val)
                draft.payload.values[act.key] = val;
            else
                draft.payload.values.push(val);                
        }
        else if (action.type === "ORDER_FORM_SUBMIT") {
            const act = action as IOrderFormPostAction;
            draft.payload.submitError = act.submitError;
        }
    });
}

export default OrderFormReducer;