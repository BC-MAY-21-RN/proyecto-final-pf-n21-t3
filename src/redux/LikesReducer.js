import { REMOVE_FAVORITE, ADD_FAVORITE } from "./Actions";

const initialState = []
export function LikesReducer (state = initialState, action){
  switch(action.type){
    case ADD_FAVORITE:
      return [...state, action.payload]
    case REMOVE_FAVORITE:
      return state.filter(song => (song.id !== action.payload.id))
    default:
      return state;
  }
}