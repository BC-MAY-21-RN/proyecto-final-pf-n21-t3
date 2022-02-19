import { createStore, applyMiddleware, combineReducers } from "redux";
import  thunk  from "redux-thunk";
import userData from './Reducers'
import spotifyData from './SpotifyReducer'

const rootReducer= combineReducers({userData, spotifyData})
export const Store = createStore(rootReducer, applyMiddleware(thunk));
