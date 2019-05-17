import * as React from "react";
import OrderCard, { IOrderCard } from "../components/OrderCard";

export interface IOrderListState {
    type: string;
    payload: IOrderListPayload;    
}

export interface IOrderListPayload {
    filter: string;
    orders: IOrderCard[];
    error: string;
}

export interface IOrderListProps {
    getOrdersAsync(): Promise<void>;
    setFilter(filter: string): void;
}

export default class OrderForm extends React.Component<IOrderListPayload & IOrderListProps> {
    constructor(props: IOrderListPayload & IOrderListProps) {
        super(props);
    }

    public async componentWillMount() {
        await this.props.getOrdersAsync();
    }

    public render(): JSX.Element {
        return <div>
            {
                this.props.orders.map((value: IOrderCard, index: number) => {
                    return <div className="row mt-3" key={index} >
                        <OrderCard id={value.id} values={value.values}/>
                    </div>;
                })
            }
        </div>;
    }
}