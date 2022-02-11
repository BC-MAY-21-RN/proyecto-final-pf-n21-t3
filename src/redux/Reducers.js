import {
  SET_NAME,
  SET_EMAIL,
  SET_TOKEN,
  SET_PASSWORD,
  SET_NEWPASSWORD,
  SET_PROVIDER,
  SET_NEWEMAIL
} from './Actions';

const initialState = {
  name: '',
  email: '',
  password: '',
  token: '',
  provider: '',
  newPassword: '',
  newEmail: ''
};

function userData(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return {...state, name: action.payload};
    case SET_EMAIL:
      return {...state, email: action.payload};
    case SET_TOKEN:
      return {...state, token: action.payload};
    case SET_PASSWORD:
      return {...state, password: action.payload};
    case SET_NEWPASSWORD:
      return {...state, newPassword: action.payload};
    case SET_PROVIDER:
      return {...state, provider: action.payload};
    case SET_NEWEMAIL:
      return {...state, newEmail: action.payload}
    default:
      return state;
  }
}

export default userData;
