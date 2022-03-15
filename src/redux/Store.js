import { createStore, applyMiddleware, combineReducers } from "redux";
import  thunk  from "redux-thunk";
import userData from './Reducers'
import spotifyData from './SpotifyReducer'
import { LikesReducer } from "./LikesReducer";

const rootReducer= combineReducers({userData, spotifyData, LikesReducer})
export const Store = createStore(rootReducer, applyMiddleware(thunk));
