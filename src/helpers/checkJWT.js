import { getToken, removeUserLocal } from "core/localStore";
import jwtDecode from "jwt-decode";
import { pushToast } from "components/Toast";

export const checkRole = (token) => {
  if (token != null) {
    const decodePayload = jwtDecode(token);
    if (!decodePayload.role.includes("Admin")) {
      pushToast("error", "Access to this page is restricted.");
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
export const checkJWT = () => {
  const token = getToken();
  if (token != null) {
    const decodePayload = jwtDecode(token);

    var current_time = new Date().getTime() / 1000;

    if (current_time < decodePayload.exp) {
      return true;
    } else {
      removeUserLocal();
      return false;
    }
  } else {
    removeUserLocal();
    return false;
  }
};
