import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from 'Reducers/index';

export default createStore(reducer, applyMiddleware(thunkMiddleware));
