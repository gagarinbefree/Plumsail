import * as React from "react";
import { IOrderValue } from './OrderForm';

export interface IOrderCard {
    id: string;
    values: IOrderValue[]
}

const OrderCard: React.SFC<IOrderCard> = (props: IOrderCard) => {
    return <div className="card">
        <div className="card-header bg-info">
           <strong>Order id: </strong>{props.id}
        </div>
        <div className="card-body" >
            {Array.from(props.values).map((item: IOrderValue, index: number) => <p key={index}><strong>{item.description}</strong>: {item.value}</p>)}
        </div>
    </div>;
};

export default OrderCard;
        
