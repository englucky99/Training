import { createStore } from 'redux';
import appReducers from './reducers';

let appStore = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


export default appStore;