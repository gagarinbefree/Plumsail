import { connect } from "react-redux";
import OrderForm, { IOrderFormPayload, IOrderFormProps, IOrderValue } from "../components/OrderForm";
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
        addChange: (key: string, value: string, description: string | undefined): void => dispatch(addChange(key, value, description)),
        submitFormAsync: async (values: IOrderValue[]): Promise<void> => dispatch(submitFormAsync(values))
    }
}
                                                         
export default connect(mapStateToProps, mapDispatchToProps)((OrderForm) as any);