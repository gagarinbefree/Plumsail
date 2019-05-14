import { IOrderListState } from "../components/OrderList";
import { IOrderCard } from "../components/OrderCard";
import { Reducer, Action } from "redux"
import produce, { Draft } from "immer";
import { IOrderListSetFilterAction, IOrderListGetAction } from "../actions/OrderList";

const initalState: IOrderListState = {
    type: "",
    payload: {
        filter: "",
        orders: [] as IOrderCard[],        
        error: ""
    }
}

const OrderListReducer: Reducer<IOrderListState, Action> = (state: IOrderListState = initalState, action: Action) => {
    return produce(state, (draft: Draft<IOrderListState>) => {
        if (action.type === "ORDER_LIST_SET_FILTER") {
            const act = action as IOrderListSetFilterAction;
            draft.payload.filter = act.filter;
        }
        else if (action.type === "ORDER_LIST_GET_ORDERS") {
            const act = action as IOrderListGetAction;
            draft.payload.filter = "";
            draft.payload.orders = act.orders;
            draft.payload.error = act.error;
        }
    });
}

export default OrderListReducer;