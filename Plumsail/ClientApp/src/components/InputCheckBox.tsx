import { IInputElement } from "./InputElement";
import * as React from "react";

const InputCheckBox: React.SFC<IInputElement> = (props: IInputElement) => {
   return <div className="form-check">
       <input className="form-check-input"
           type="checkbox"
           name="inlineRadioOptions"
           id={props.id}           
           onChange={(event: any) => props.handleChange(event.target.checked)} />
        <label className="form-check-label" htmlFor={props.id}>
           {props.title}
        </label>
    </div>;
}

export default InputCheckBox;
