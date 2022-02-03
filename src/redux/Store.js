import { createStore, applyMiddleware } from "redux";
import  thunk  from "redux-thunk";
import userData from './Reducers'

export const Store = createStore(userData, applyMiddleware(thunk));
