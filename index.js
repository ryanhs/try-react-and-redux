import React, { Component } from 'react';
import { render } from 'react-dom';

// import { TestSetState as TestNow } from './components/TestSetState'
// import { TestVDom as TestNow } from './components/TestVDom'
// import { TestSimpleReducer as TestNow } from './components/TestSimpleReducer'
// import { TestRedux as TestNow } from './components/TestRedux'
import { TestReactRedux as TestNow } from './components/TestReactRedux'

render(<TestNow />, document.getElementById('app-root'));
