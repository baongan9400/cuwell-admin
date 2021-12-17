import axiosManagement from "./axiosAuthenService";

const userApi = {
  getAllUsers: () => {
    const url = "/admin/users";
    return axiosManagement.get(url);
  },
  getBestSellers: () => {
    const url = "/admin/sell-users";
    return axiosManagement.get(url);
  },
};

export default userApi;
