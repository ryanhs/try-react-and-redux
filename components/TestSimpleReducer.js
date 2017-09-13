import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const reducer = (state = { amount: 0 }, action) => {
    let newState = { amount: 0 };

    switch (action.type) {
        case 'INCREMENT':
            newState.amount = state.amount + 1;
            break;
        case 'DECREMENT':
            newState.amount = state.amount - 1;
            break;
    }

    return newState;
};


export class TestSimpleReducer extends Component {
    constructor(props) {
        super(props);
        this.state = reducer(undefined, {});
    }

    dispatch(action) {
        this.setState(prevState => reducer(prevState, action));
    }

    render() {
        return (<div>
            <label>{this.state.amount}</label>
            <hr/>
            <button onClick={() => this.dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => this.dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>)
    }
}
