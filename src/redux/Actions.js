export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_TOKEN = 'SET_TOKEN';

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});
export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});
export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});
