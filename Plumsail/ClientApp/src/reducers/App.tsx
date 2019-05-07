import { IAppState } from "../components/App";
import produce, { Draft } from "immer";
import { IShowOrderFormAction } from "../actions/App";
import { Reducer, Action } from "redux"

const initalState: IAppState = {
    type: "",
    payload: {
        showOrderForm: false
    }
}

const AppReducer: Reducer<IAppState, Action> = (state: IAppState = initalState, action: Action) => {
    return produce<IAppState>(state, (draft: Draft<IAppState>): void => {
        if (action.type === "APP_SHOW_CREATE_ORDER_FORM") {
            const act = action as IShowOrderFormAction;
            draft.payload.showOrderForm = act.showOrderForm;
        }
    });
};

export default AppReducer;

