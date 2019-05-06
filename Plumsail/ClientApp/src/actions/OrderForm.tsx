import { Action } from "redux";

export interface IAddChangeAction extends Action<string> {
    type: string;
    fieldName;
    fieldValue;
}

export const addChange = (fieldName: string, fieldValue: string): IAddChangeAction => ({
    type: "ORDER_FORM_ADD_CHANGE",
    fieldName,
    fieldValue
});