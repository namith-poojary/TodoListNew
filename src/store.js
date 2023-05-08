import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Todoreducer from './reducers/Todoreducer';
//import TodoAction from './action/TodoAction';

const reducer = combineReducers({
    Todo: Todoreducer
    /*reducers go here*/
});

const initialState = {};

const middleware = [thunk]; //there can be multiple middlewares here

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;