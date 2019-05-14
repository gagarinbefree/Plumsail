import { connect } from "react-redux";
import OrderForm, { IOrderFormPayload, IOrderFormProps } from "../components/OrderForm";
import { addChange } from "../actions/OrderForm";
import { submitFormAsync } from "../actions/OrderForm";

const mapStateToProps = (state: any): IOrderFormPayload => {
    return {
        values: state.OrderFormReducer.payload.values,
        submitError: state.OrderFormReducer.payload.submitError
    }
}

const mapDispatchToProps = (dispatch: any): IOrderFormProps => {
    return {
        addChange: (field, value): void => dispatch(addChange(field, value)),
        submitFormAsync: async (values: Map<string, string>): Promise<void> => dispatch(submitFormAsync(values))
    }
}
                                                         
export default connect(mapStateToProps, mapDispatchToProps)((OrderForm) as any);