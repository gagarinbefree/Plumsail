import { IInputElement } from "./InputElement";
import * as React from "react";

const InputRadio: React.SFC<IInputElement> = (props: IInputElement) => {
    return <div className="form-check">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id={props.id} onChange={(event: any) => props.handleChange(event.target.value)}/>
        <label className="form-check-label" htmlFor={props.id}>{props.title}</label>
    </div>;
}

export default InputRadio;
