import { IOrderFormState, IOrderValue } from "../components/OrderForm";
import { Reducer, Action } from "redux"
import produce, { Draft } from "immer";
import { IAddChangeAction, IOrderFormPostAction } from "../actions/OrderForm";

const defaultValues: IOrderValue[] = [
    {
        key: "birthday",
        value: new Date(),
        description: "birthday"
    }
]

const initalState: IOrderFormState = {
    type: "",
    payload: {
        values: defaultValues,
        submitError: ""
    }
}

const OrderFormReducer: Reducer<IOrderFormState, Action> = (state: IOrderFormState = initalState, action: Action) => {
    return produce(state, (draft: Draft<IOrderFormState>) => {
        if (action.type === "ORDER_FORM_ADD_CHANGE") {
            const act = action as IAddChangeAction;
            const index = draft.payload.values.findIndex(f => f.key === act.key);
            if (index >= 0) {
                draft.payload.values[index] = { ...act };
            }
            else {
                draft.payload.values.push({ ...act });
            }

            // draft.payload.values = draft.payload.values.map((val: IOrderValue, index: number) => {
            //    if (val.key === act.key) {
            //        return val = { ...act }
            //    }
            //    return val;
            // });
        }
        else if (action.type === "ORDER_FORM_SUBMIT") {
            const act = action as IOrderFormPostAction;
            draft.payload.submitError = act.submitError;
        }
    });
}

export default OrderFormReducer;