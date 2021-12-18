import { all } from "redux-saga/effects";
import userSaga from "./login/userSaga";

export default function* rootSaga() {
  yield all([userSaga()]);
}
