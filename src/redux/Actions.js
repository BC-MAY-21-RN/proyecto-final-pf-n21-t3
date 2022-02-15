export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_INFO = 'SET_INFO';
export const SET_TOPLIST = 'SET_TOPLIST'

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
export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});
export const setinfo = (info) => ({
  type: SET_INFO,
  payload: info,
});

export const setTopList = (topList) => ({
  type: SET_TOPLIST,
  payload: topList
})