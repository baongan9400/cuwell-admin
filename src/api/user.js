import axiosManagement from "./axiosAuthenService";

const userApi = {
  getAllUsers: () => {
    const url = "auth-service/admin/users";
    return axiosManagement.get(url);
  },
  getBestSellers: () => {
    const url = "auth-service/admin/sell-users";
    return axiosManagement.get(url);
  },
  statisticUserByMonth: () => {
    const url = "auth-service/users/statistic/user-created";
    return axiosManagement.get(url);
  },
};

export default userApi;
