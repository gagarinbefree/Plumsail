import * as React from 'react';

export interface IOrderFormState {
    type: string;
    payload: IOrderFormPayload;
}

export interface IOrderFormPayload {
    showOrderForm: boolean;
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
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}