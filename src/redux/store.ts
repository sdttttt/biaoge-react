import { createStore } from 'redux';
import { userChange } from './reducers';

const store = createStore(userChange , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
