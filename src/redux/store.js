import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rooReducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rooReducers, composeEnhancers(applyMiddleware(thunk)))


export default store