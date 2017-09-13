import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class TestSetState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            amount: this.state.amount + 1,
        });
        console.log('increment');
    }

    decrement() {
        this.setState({
            amount: this.state.amount - 1,
        });
        console.log('decrement');
    }

    render() {
        return (<div>
            <label>{this.state.amount}</label>
            <hr/>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>)
    }
}
