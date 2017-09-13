import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';


// ACTIONS  --------------------------------------------------------------------
const AMOUNT_INCREMENT = 'INCREMENT'
const AMOUNT_DECREMENT = 'AMOUNT_DECREMENT'

const amountIncrement = () => {
    return {
        type: AMOUNT_INCREMENT,
    }
}
const amountDecrement = () => {
    return {
        type: AMOUNT_DECREMENT,
    }
}

// REDUCERS --------------------------------------------------------------------
const amountReducer = (state, action) => {
    let newState = 0;

    switch (action.type) {
        case AMOUNT_INCREMENT:
            newState = state + 1;
            break;
        case AMOUNT_DECREMENT:
            newState = state - 1;
            break;
    }

    return newState;
};


// REDUX INITAL ----------------------------------------------------------------
const reducers = combineReducers({
    amount: amountReducer,
});

const store = createStore(reducers, {
        amount: amountReducer(undefined, {})
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => {
    console.log('amount now: ' + store.getState().amount);
})

// VIEWS  ----------------------------------------------------------------------
export class AllInComponent extends Component {
    render() {
        return (<div>
            <label>{this.props.amount}</label>
            <hr/>
            <button onClick={this.props.doIncrement}>Increment</button>
            <button onClick={this.props.doDecrement}>Decrement</button>
        </div>)
    }
}
AllInComponent.propTypes = {
    amount: PropTypes.number.isRequired,
    doIncrement: PropTypes.func.isRequired,
    doDecrement: PropTypes.func.isRequired
};

let mapStateToProps = (state) => ({
    amount: state.amount,
});

let mapDispatchToProps = (dispatch) => ({
    doIncrement: () => dispatch(amountIncrement()),
    doDecrement: () => dispatch(amountDecrement())
})

// connect state & dispatch to Component, basically makes new Component, yeah Container!
const Container = connect(mapStateToProps, mapDispatchToProps)(AllInComponent);

// All Good, go now ------------------------------------------------------------
export const TestReactRedux = () => (
    <Provider store={store}>
        <Container />
    </Provider>
);
