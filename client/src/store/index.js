import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer.js';

const reducer = combineReducers({
  userReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;