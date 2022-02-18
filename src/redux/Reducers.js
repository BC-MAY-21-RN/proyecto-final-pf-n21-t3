
import {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_NEWPASSWORD,
  SET_PROVIDER,
  SET_NEWEMAIL, 
  SET_UID
} from './Actions';

const initialState = {
  uid: '',
  name: '',
  email: '',
  password: '',
  provider: '',
  newPassword: '',
  newEmail: '',
};


function userData(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return {...state, name: action.payload};
    case SET_EMAIL:
      return {...state, email: action.payload};
    case SET_PASSWORD:
      return {...state, password: action.payload}
    case SET_NEWPASSWORD:
      return {...state, newPassword: action.payload};
    case SET_PROVIDER:
      return {...state, provider: action.payload};
    case SET_NEWEMAIL:
      return {...state, newEmail: action.payload}
    case SET_UID:
      return{...state, uid: action.payload}
    default:
      return state;
  }
}

export default userData;
