import { IInputElement } from "./InputElement";
import * as React from "react";
import InvalidFeedBack from "./InvalidFeedBack"

const InputCheckBox: React.SFC<IInputElement> = (props: IInputElement) => {
   return <div className="form-check">
       <input className="form-check-input"
           type="checkbox"
           name={props.id}
           id={props.id}
           required={props.required}
           onChange={(event: any) => props.handleChange(event.target.checked)}
       />
       <label className="form-check-label" htmlFor={props.id}>{props.title}</label>
       <InvalidFeedBack text={props.invalidFeedBack} />
    </div>;
}

export default InputCheckBox;
