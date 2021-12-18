import axiosManagement from "../axiosAuthenService";

const authenApi = {
  login: ({ email, password }) => {
    const loginData = {
      loginData: {
        email,
        password,
      },
    };
    const url = `auth-service/auth/login`;
    return axiosManagement.post(url, loginData);
  },
  getUserDetail: (idUser) => {
    const url = `auth-service/users/${idUser}`;
    return axiosManagement.get(url);
  },
  createUser: (data) => {
    const { email, name, phone, city, district, commute } = data;
    const signupData = {
      newUserData: {
        email: email,
        name: name,
        phone: phone,
        address: {
          city: city,
          district: district,
          commune: commute,
        },
      },
    };
    const url = `auth-service/auth/`;
    return axiosManagement.post(url, signupData);
  },
};

export default authenApi;
