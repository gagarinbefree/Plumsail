import { connect } from "react-redux";
import OrderForm, { IOrderFormPayload, IOrderFormProps } from "../components/OrderForm";
import { addChange } from "../actions/OrderForm";

const mapStateToProps = (state: any): IOrderFormPayload => {
    return {
        index: state.OrderFormReducer.payload.index,
        values: state.OrderFormReducer.payload.values
    }
}

const mapDispatchToProps = (dispatch: any): IOrderFormProps => {
    return {
        addChange: (field, value): void => dispatch(addChange(field, value))
    }
}
                                                         
export default connect(mapStateToProps, mapDispatchToProps)((OrderForm) as any);