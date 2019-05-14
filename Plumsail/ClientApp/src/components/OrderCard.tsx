import * as React from "react";

export interface IOrderCard {
    id: string;
    values: Map<string, string>;
}

const OrderCard: React.SFC<IOrderCard> = (props: IOrderCard) => {
    return  <div className="card">
        <div className="card-body" >
            <div>Order id:{props.id}</div>
            {Array.from(props.values).map((value: string[], index: number) => <p key={index}>{value[0]}: {value[1]}</p>)}
        </div>
    </div>       
}
        
export default OrderCard;
        
