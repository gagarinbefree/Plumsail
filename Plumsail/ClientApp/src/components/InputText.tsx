import { IInputElement } from "./InputElement";
import * as React from "react";
import InvalidFeedBack from "./InvalidFeedBack"

const InputText: React.SFC<IInputElement> = (props: IInputElement) => {
    return <React.Fragment>
        <label htmlFor={props.id}>{props.title}</label>
        <input type="text"
            name={props.id}
            className="form-control"
            id={props.id}
            placeholder={props.placeholder}
            required={props.required}       
            onChange={(event: any) => props.handleChange(event.target.value)}
        />
        <InvalidFeedBack text={props.invalidFeedBack} />
    </React.Fragment>;
}

export default InputText;

