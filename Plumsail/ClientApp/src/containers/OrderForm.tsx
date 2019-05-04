import { connect } from "react-redux";
import OrderForm, { IOrderFormPayload, IOrderFormProps } from "../components/OrderForm";
import { sendOrderFormAsync } from "../actions/OrderForm";

const mapStateToProps = (state: any): IOrderFormPayload => {
    return {
        showOrderForm: state.AppReducer.payload.showCreateOrderForm,
        bithday: new Date()
    }
}

const mapDispatchToProps = (dispatch: any): IOrderFormProps => {
    return {
        sendOrderFormAsync: async (): Promise<void> => dispatch(sendOrderFormAsync()),
    }
}
                                                         
export default connect(mapStateToProps, mapDispatchToProps)((OrderForm) as any);