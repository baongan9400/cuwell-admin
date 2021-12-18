import {
  USER_LOGGEDIN,
  USER_LOGGEDOUT,
  LOGIN_USER,
  ERROR,
} from "../../constants";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user, check: false }
  : {
      isLoggedIn: false,
      user: null,
      check: false,
    };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        check: true,
      };
    case USER_LOGGEDIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        check: false,
      };
    case ERROR:
      return {
        ...state,
        check: false,
      };
    case USER_LOGGEDOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        check: false,
      };

    default:
      return state;
  }
};
