import * as React from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export interface IOrderFormState {
    type: string;
    payload: IOrderFormPayload;
}

export interface IOrderFormPayload {
    showOrderForm: boolean;
    bithday: Date;
}

export interface IOrderFormProps {
    sendOrderFormAsync(): Promise<void>;    
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="userName">Your name</label>
                                <input type="text" className="form-control" id="userName" aria-describedby="userName" placeholder="Enter your name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="example-datepicker">Your birthday</label>
                                <div><DatePicker className="form-control" selected={this.props.bithday} onChange={this.xxx} /></div>
                            </div>

                            <div className="form-group">
                                <label className="mr-sm-2" htmlFor="paymentMethod">Payment method</label>
                                <select className="custom-select mr-sm-2" id="paymentMethod">
                                    <option selected={true}>Choose payment method</option>
                                    <option value="1">Credit Cards</option>
                                    <option value="2">Mobile Payments</option>
                                    <option value="3">Bank Transfers</option>
                                    <option value="4">Cash</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">
                                        The information should be submitted in electronic form
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">
                                        We can also send out an invoice for group reservations 
                                     </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        I accept the Terms
                                    </label>
                                </div>                                
                            </div>


                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>);
    }

    private xxx(): void {
        // empty
    }

}