# try-react-and-redux
this simple project is only to describe the different of make a simple page with:
- `TestSetState.js`  
simple react state

- `TestVDom.js`  
simple react dom with ref

- `TestSimpleReducer.js`  
react + simple reducer (redux idea)

- `TestRedux.js`  
react + redux, **without** react-redux connect

- `TestReactRedux.js`  
react + redux, **with** react-redux connect



#### index.js
Basically you can just uncomment one of the components to see same "results", with different methods
```javascript

// import { TestSetState as TestNow } from './components/TestSetState'
// import { TestVDom as TestNow } from './components/TestVDom'
// import { TestSimpleReducer as TestNow } from './components/TestSimpleReducer'
// import { TestRedux as TestNow } from './components/TestRedux'
import { TestReactRedux as TestNow } from './components/TestReactRedux'

render(<Layout><TestNow /></Layout>, document.getElementById('app-root'));
```
