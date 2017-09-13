import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
export class TestRedux extends Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    getCurrentAmount() {
        return store.getState().amount;
    }

    increment() {
        store.dispatch(amountIncrement());
        this.forceUpdate(); // re-render the component after dispatch an action
    }

    decrement() {
        store.dispatch(amountDecrement());
        this.forceUpdate(); // re-render the component after dispatch an action
    }

    render() {
        return (<div>
            <label>{this.getCurrentAmount()}</label>
            <hr/>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>)
    }
}
