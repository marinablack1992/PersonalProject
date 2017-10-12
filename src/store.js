import { createStore, applyMiddleware } from 'redux';
import reducer from './ducks/reducer.js';
import promiseMiddleware from 'redux-promise-middleware';


export default createStore(reducer, applyMiddleware(promiseMiddleware())); //the store has to be aware of the reducer.