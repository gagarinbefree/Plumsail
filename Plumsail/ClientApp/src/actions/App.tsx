﻿import { Action } from "redux";

export interface IShowOrderFormAction extends Action<string> {
    showOrderForm: boolean;
}

export const onShowOrderForm = (): IShowOrderFormAction => ({
    type: "APP_SHOW_CREATE_ORDER_FORM",
    showOrderForm: true
});