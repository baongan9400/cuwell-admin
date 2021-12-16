// import { getAccessToken, removeUserLocal } from "core/localStore";
// import jwtDecode from "jwt-decode";

export const checkJWT = () => {
  // const token = getAccessToken()?.access_token;
  // // console.log(token);
  // if (token != null) {
  //   const decodePayload = jwtDecode(token);

  //   var current_time = new Date().getTime() / 1000;

  //   if (current_time < decodePayload.exp) {
  //     // console.log(expiration - now);
  //     return true;
  //   } else {
  //     removeUserLocal();
  //     return false;
  //     // return true;
  //   }
  // } else {
  //   removeUserLocal();
  //   return false;
  //   // return true;
  // }
  return true;
};
