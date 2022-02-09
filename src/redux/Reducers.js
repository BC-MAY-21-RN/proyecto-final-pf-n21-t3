import {SET_NAME, SET_EMAIL, SET_TOKEN, SET_PASSWORD} from './Actions'

const initialState = {
  name : '',
  email:'',
  password:'',
  token:'',
}

function userData (state = initialState, action) {
  switch(action.type) {
    case SET_NAME:
      return {...state, name: action.payload}
    case SET_EMAIL:
      return{...state, email: action.payload}
    case SET_TOKEN:
      return{...state, token: action.payload}
    case SET_PASSWORD:
      return {...state, password: action.payload}
    default:
      return state;
  }
} 

export default userData;