import { IInputElement } from "./InputElement";
import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDate: React.SFC<IInputElement> = (props: IInputElement) => {
    return <React.Fragment>
        <label htmlFor={props.id}>{props.title}</label>
        <div><DatePicker className="form-control" onChange={(event: any) => props.handleChange(event.target.value)} /></div>
    </React.Fragment>;
}

export default  InputDate;