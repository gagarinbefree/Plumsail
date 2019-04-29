import { IAppState } from "../components/App";
import { Action } from "redux";
import produce from "immer";
import { IShowOrderFormAction } from "../actions/App";
import App = require("../components/App");
import IAppPayload = App.IAppPayload;

const initalState: IAppState = {
    type: "",
    payload: {
        showOrderForm: false
    }
}

const AppReducer = (state: IAppState = initalState, action: any) => produce(state, draft => {
    if (action.type === "APP_SHOW_CREATE_ORDER_FORM") {        
        draft.payload.showOrderForm = action.showOrderForm;

        console.log(action.showOrderForm.toString());
    }
});

export default AppReducer;

