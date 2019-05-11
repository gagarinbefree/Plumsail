import * as React from "react";


const OrderCard: React.SFC<Map<string, string>> = (props: Map<string, string>) => {
    return  <div className="card">
        <div className="card-body">
            { Array.from(props).map((value: string[]) => {return <p>{value[0]}: {value[1]}</p>})}
        </div>
    </div>       
}
        
export default OrderCard;
        
