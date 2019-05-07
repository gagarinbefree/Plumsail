import { IInputElement } from "./InputElement";
import InvalidFeedBack from "./InvalidFeedBack"
import * as React from "react";

const InputRadio: React.SFC<IInputElement> = (props: IInputElement) => {
    return <div className="form-check">
        <input className="form-check-input"
            type="radio"
            name={props.name}
            id={props.id}
            required={props.required}
            onChange={(event: any) => props.handleChange(event.target.value)} />
        <label className="form-check-label" htmlFor={props.id}>{props.title}</label>
        <InvalidFeedBack text={props.invalidFeedBack} />
    </div>;
}

export default InputRadio;
