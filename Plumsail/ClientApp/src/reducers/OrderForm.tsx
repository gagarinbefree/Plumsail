import { IOrderFormState } from '../components/OrderForm';
import { ISendOrderFormAction } from '../actions/OrderForm';
import { Action } from 'redux';
import produce from 'immer';

const initalState: IOrderFormState = {
    type: '',
    payload: {
        showOrderForm: false
    }
}

const OrderFormReducer = (state: IOrderFormState = initalState, action: Action) => produce(state, draft => {
    if (action.type === 'APP_SHOW_CREATE_ORDER_FORM') {
        const act = action as ISendOrderFormAction;
        draft.payload.showOrderForm = act.showOrderForm;

        console.log(act.showOrderForm.toString());
    }
})

export default OrderFormReducer;

