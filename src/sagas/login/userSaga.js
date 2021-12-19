import { takeLatest, call, put, all } from "redux-saga/effects";
import authenApi from "api/authen/authenApi";
import * as types from "redux/constants";
import * as actions from "redux/actions/login/authAction";
import jwt_decode from "jwt-decode";
import { pushToast } from "components/Toast";
import { checkRole } from "helpers/checkJWT";

function* login({ email, password }) {
  try {
    const data = yield call(authenApi.login, { email, password });
    if (data && data.payload) {
      const token = JSON.stringify(data.payload);
      if (token && checkRole(token)) {
        localStorage.setItem("token", token);
        if (token) {
          var decoded = jwt_decode(token);
          var userId = decoded.user.id;
          const userData = yield call(authenApi.getUserDetail, userId);
          yield put(actions.userLoggedIn(userData.payload, userId));
          localStorage.setItem("user", JSON.stringify(userData.payload));
          window.location.href = "/";
        }
      } else {
        yield put(actions.checkError());
      }
    }
  } catch (e) {
    yield put(actions.checkError());
    pushToast("error", "Login failed. Invalid password or email.");
  }
}

function* logout() {
  localStorage.clear();
  yield put(actions.userLoggedOutAction());
  window.location.href = "/login";
}

function* checkJWT() {
  const result = yield call(authenApi.isExpired);
  if (result === true) {
    yield call(authenApi.logout);
    yield put(actions.userLoggedOutAction());
  }
}

function* watchLoginUser() {
  yield takeLatest(types.LOGIN_USER, login);
}

function* watchLogoutUser() {
  yield takeLatest(types.LOGOUT_USER, logout);
}

function* watchCheckJWT() {
  yield takeLatest(types.CHECK_JWT_EXP, checkJWT);
}

function* userSaga() {
  yield all([watchLoginUser(), watchLogoutUser(), watchCheckJWT()]);
}

export default userSaga;
