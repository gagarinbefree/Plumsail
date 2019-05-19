import * as React from "react";
import { IInputElement } from "./InputElement";
import InvalidFeedBack from "./InvalidFeedBack";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDate: React.SFC<IInputElement> = (props: IInputElement) => {
    return <React.Fragment>
        <label htmlFor={props.id}>{props.title}</label>
        <div>    
            <DatePicker name={props.id}
                className="form-control"
                id={props.id}
                placeholderText={props.placeholder}
                required={props.required}     
                onChange={(date: any) => props.handleChange(date)}
                selected={props.value}                
                dateFormat="dd.MM.YYYY"
        />            
        </div>        
        <InvalidFeedBack text={props.invalidFeedBack} />        
    </React.Fragment>;
}

export default InputDate