﻿import { Action, Dispatch } from "redux";
import { IOrderCard } from "../components/OrderCard";

export interface IOrderListSetFilterAction extends Action {
    filter: string;
}

export interface IOrderListGetAction extends Action {
    orders: IOrderCard[];
    error: string;
}

export const setFilter = (filter: string): IOrderListSetFilterAction => ({
    type: "ORDER_LIST_SET_FILTER",
    filter
});

export const getOrders = (orders: IOrderCard[], error: string): IOrderListGetAction => ({
    type: "ORDER_LIST_GET_ORDERS",
    orders,
    error
});

export const getOrdersAsync = () => (
    async (dispatch: Dispatch): Promise<void> => {
        try {
            const res: any = await fetch("/api/orders",
            {
                method: "get",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            dispatch(getOrders(await res.json(), ""));
        }
        catch (ex) {
            dispatch(getOrders([], ex));
        }
    }
);