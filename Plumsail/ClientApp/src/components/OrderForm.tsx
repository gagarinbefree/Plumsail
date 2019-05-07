import * as React from "react"
import "react-datepicker/dist/react-datepicker.css";
import InputText from "./InputText";
import InputDate from "./InputDate";
import InputOption from "./InputOption";
import InputCheckBox from "./InputCheckBox";
import InputRadio from "./InputRadio";

export interface IOrderFormState {
    type: string;
    payload: IOrderFormPayload;
}

export interface IOrderFormPayload {
    values: Map<string, string>;
}

export interface IOrderFormProps {
    addChange(fieldName: string, filedValue: string): void;
}

export default class OrderForm extends React.Component<IOrderFormPayload & IOrderFormProps> {
    constructor(props: IOrderFormPayload & IOrderFormProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (<div id="orderForm" className="modal" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create new order</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.handleSubmit} noValidate={true}>

                            <div className="form-group">
                                <InputText handleChange={(value) => this.props.addChange("userName", value)}
                                    id="userName" title="User name" placeholder="Enter your name" required={true} invalidFeedBack="Please input a user name"
                                />
                            </div>

                            <div className="form-group">
                                <InputDate handleChange={(value) => this.props.addChange("birthday", value)}
                                    id="birthday" title="Birthday" placeholder="Enter your birthday" 
                                />
                            </div>

                            <div className="form-group">
                                <InputOption handleChange={(value) => this.props.addChange("paymentMethod", value)}
                                    id="inputOption" title="Payment method" placeholder="Select payment method" required={true} invalidFeedBack="Please select payment method"
                                    values={["Credit Cards", "Bank Transfers", "Cash"]}
                                />
                            </div>

                            <div className="form-group">
                                <InputRadio handleChange={(value) => this.props.addChange("electronic", value)}
                                    id="electronic" title="The information should be submitted in electronic form" required={true} name="submitMethod"
                                />
                                <InputRadio handleChange={(value) => this.props.addChange("electronic", value)}
                                    id="invoice" title="We can also send out an invoice for group reservations" required={true} name="submitMethod" invalidFeedBack="Please select submit method"
                                />
                            </div>

                            <div className="form-group">
                                <InputCheckBox handleChange={(value) => this.props.addChange("accept", value)}
                                    id="accept" title="I accept the Terms" required={true} invalidFeedBack="Please accept the Terms"
                                />
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>);
    }

    private handleSubmit = (e: any): void => {
        e.preventDefault();
        e.target.className = "was-validated";
    }
}