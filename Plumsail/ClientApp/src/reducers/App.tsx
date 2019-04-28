import { IAppState } from '../components/App';
import { Action } from 'redux';
import produce from 'immer';
import { IShowOrderFormAction } from '../actions/App';

const initalState: IAppState = {
    type: '',
    payload: {
        showOrderForm: false
    }
}

const AppReducer = (state: IAppState = initalState, action: Action) => produce(state, draft => {
    if (action.type === 'APP_SHOW_CREATE_ORDER_FORM') {
        const act = action as IShowOrderFormAction;
        draft.payload.showOrderForm = act.showOrderForm;

        console.log(act.showOrderForm.toString());
    }
})

export default AppReducer;

