import * as React from "react";

export interface IOrderCard {
    id: string;
    values: Map<string, string>;
}

const OrderCard: React.SFC<IOrderCard> = (props: IOrderCard) => {
    return <div className="card">
        <div className="card-header bg-info">
           <strong>Order id: </strong>{props.id}
        </div>
        <div className="card-body" >
            {Array.from(props.values).map((value: string[], index: number) => <p key={index}><strong>{value[0]}</strong>: {value[1]}</p>)}
        </div>
    </div>;
};

export default OrderCard;
        
