import { connect } from 'react-redux';
import App, { IAppPayload, IAppProps } from '../components/App';
import { onShowOrderForm } from '../actions/App';

const mapStateToProps = (state: any): IAppPayload => {
    return {
        showOrderForm: state.AppReducer.payload.showOrderForm
    }
}

const mapDispatchToProps = (dispatch: any): IAppProps => {
    return {  
        onShowOrderForm: (): void => dispatch(onShowOrderForm())
    }
}

export default connect<IAppPayload, IAppProps>(mapStateToProps, mapDispatchToProps)(App);