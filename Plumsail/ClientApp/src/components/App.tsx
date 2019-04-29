import * as React from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import OrderForm from "../containers/OrderForm";

export interface IAppState {
    type: string;
    payload: IAppPayload;
}

export interface IAppPayload {
    showOrderForm: boolean;    
}

export interface IAppProps {
    onShowOrderForm(): void;
}

export default class App extends React.Component<IAppPayload & IAppProps> {
    constructor(props: IAppPayload & IAppProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="ml-3 mt-3">
                            <button type="button"
                                className="btn btn-primary"
                                onClick={(): void => this.props.onShowOrderForm()}
                                data-toggle="modal" data-target="#orderForm">
                                Create order
                            </button>
                            <OrderForm />
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}