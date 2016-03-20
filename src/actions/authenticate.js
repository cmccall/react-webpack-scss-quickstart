// for actions, see: http://redux.js.org/docs/basics/Actions.html
// for some conventions, see: https://github.com/acdlite/flux-standard-action

// action types
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';

// action creators
export const login = (username, password) => {
  return {
      type: LOG_IN,
      payload: {
          username,
          password
      }
  }
};

export const loginSuccess = (token) => {
    return {
        type: LOG_IN_SUCCESS,
        payload: {
            token
        }
    }
};

export const logout = () => {
    return {
        type: LOG_OUT
    }
};