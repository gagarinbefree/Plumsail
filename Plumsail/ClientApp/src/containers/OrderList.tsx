import { connect } from "react-redux";
import OrderList, { IOrderListPayload, IOrderListProps } from "../components/OrderList";
import { getOrdersAsync, setFilter } from "../actions/OrderList";

const mapStateToProps = (state: any): IOrderListPayload => {
    return {
        filter: state.OrderListReducer.payload.filter,
        orders: state.OrderListReducer.payload.orders,
        error: state.OrderListReducer.payload.error
    }
}

const mapDispatchToProps = (dispatch: any): IOrderListProps => {
    return {
        getOrdersAsync: (): Promise<void> => dispatch(getOrdersAsync()),
        setFilter: (filter: string): void => dispatch(setFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)((OrderList) as any);