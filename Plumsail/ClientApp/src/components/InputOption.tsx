import { IInputElement } from "./InputElement";
import InvalidFeedBack from "./InvalidFeedBack";
import * as React from "react";

const InputPayment: React.SFC<IInputElement> = (props: IInputElement) => {
    return <React.Fragment>
        <label className="mr-sm-2" htmlFor="paymentMethod">{props.title}</label>
        <select className="custom-select mr-sm-2" id={props.id} onChange={(event: any) => props.handleChange(event.target.options[event.target.selectedIndex].text)}>
            { props.values && props.values.map((text: string, index: number) => {
                return <option value={index} key={index}>{text}</option>;
                })
            }
        </select>
        <InvalidFeedBack text={props.invalidFeedBack} />
    </React.Fragment>;
}

export default InputPayment;
