import * as types from "../../constants";

export const loginUserAction = (email, password) => {
  return {
    type: types.LOGIN_USER,
    email,
    password,
  };
};
/**
 *
 * @param {email, token} user
 */
export const userLoggedIn = (user, id) => {
  user.id = id;
  return {
    type: types.USER_LOGGEDIN,
    user,
  };
};

export const logoutUserAction = () => {
  return {
    type: types.LOGOUT_USER,
  };
};

export const userLoggedOutAction = () => {
  return {
    type: types.USER_LOGGEDOUT,
  };
};

export const checkJWTExpAction = () => {
  return {
    type: types.CHECK_JWT_EXP,
  };
};
export const checkError = () => {
  return {
    type: types.ERROR,
  };
};
