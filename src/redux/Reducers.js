import {SET_NAME, SET_PASSWORD, SET_EMAIL, SET_TOKEN} from './Actions'

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
    case SET_PASSWORD:
      return {...state, password: action.payload}
    case SET_EMAIL:
      return{...state, email: action.payload}
    case SET_TOKEN:
      return{...state, token: action.payload}
    default:
      return state;
  }
} 

export default userData;