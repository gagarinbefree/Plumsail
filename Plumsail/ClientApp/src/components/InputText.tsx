import { IInputElement } from "./InputElement";
import * as React from "react";

const ImputText: React.SFC<IInputElement> = (props: IInputElement) => {
    return <React.Fragment>
        <label htmlFor={props.id}>{props.title}</label>
        <input type="text"
            name={props.id}
            className="form-control"
            id={props.id}
            aria-describedby={props.id}
            placeholder={props.placeholder}
            required={props.required}       
            onChange={(event: any) => props.handleChange(event.target.value)}
        />
        {props.invalidFeedback && <div className="invalid-feedback">
            {props.invalidFeedback}
         </div>}
    </React.Fragment>;
}

export default ImputText;

