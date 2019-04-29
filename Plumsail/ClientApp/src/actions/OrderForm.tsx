import { Action, Dispatch } from "redux";

export interface ISendOrderFormAction extends Action<string> {
    type: string;
    error: string;
}

export const sendOrderFormAction = (error: string): ISendOrderFormAction => ({
    type: "ORDER_FORM_SEND",
    error: error
});

export const sendOrderFormAsync = () => (
    async (dispatch: Dispatch, getState: Function): Promise<void> => {
        try {
            const res: any = await fetch("", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: ""
            });

            await res.json();

            dispatch((sendOrderFormAction("")) as any);
        }        
        catch (e) {
            dispatch((sendOrderFormAction(e)) as any);
        }
    }
)