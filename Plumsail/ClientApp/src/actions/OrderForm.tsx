import { Action, Dispatch } from "redux";
import { IOrderValue } from "../components/OrderForm"

export interface IAddChangeAction extends Action {
    key: string;
    value: string;
    description: string;
}

export interface IOrderFormPostAction extends Action {
    submitError: string
}

export const addChange = (key: string, value: string, description: string | undefined): IAddChangeAction => ({
    type: "ORDER_FORM_ADD_CHANGE",
    key,
    value,
    description: description || key
});

export const submitForm = (error: string): IOrderFormPostAction => ({
    type: "ORDER_FORM_SUBMIT",
    submitError: error
});

export const submitFormAsync = (values: IOrderValue[]) => (
    async (dispatch: Dispatch): Promise<void> => {
        try {
            const res: any = await fetch("/api/orders", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            await res.json();
        }
        catch (ex) {
            dispatch(submitForm(ex));
        }
    }
)