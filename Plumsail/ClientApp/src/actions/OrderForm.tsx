﻿import { Action, Dispatch } from "redux";

export interface IAddChangeAction extends Action {
    fieldName;
    fieldValue;
}

export interface IOrderFormPostAction extends Action {
    submitError: string
}

export const addChange = (fieldName: string, fieldValue: string): IAddChangeAction => ({
    type: "ORDER_FORM_ADD_CHANGE",
    fieldName,
    fieldValue
});

export const submitForm = (error: string): IOrderFormPostAction => ({
    type: "ORDER_FORM_SUBMIT",
    submitError: error
});

export const submitFormAsync = (values: Map<string, string>) => (
    async (dispatch: Dispatch): Promise<void> => {
        try {
            const val = [...values].reduce((o, [key, value]) => {
                o[key] = value;

                return o;
            }, {});

            const res: any = await fetch("/api/orders", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(val)
            });

            await res.json();
        }
        catch (ex) {
            dispatch(submitForm(ex));
        }
    }
)