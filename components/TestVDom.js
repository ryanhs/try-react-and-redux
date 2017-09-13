import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class TestVDom extends Component {

    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.refs.amountLabel.innerText = (+this.refs.amountLabel.innerText) + 1
        console.log('increment');
    }

    decrement() {
        this.refs.amountLabel.innerText = (+this.refs.amountLabel.innerText) - 1
        console.log('decrement');
    }

    render() {
        return (<div>
            <label ref="amountLabel">0</label>
            <hr/>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>)
    }
}
