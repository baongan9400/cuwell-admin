import axiosManagement from "./axiosAuthenService";

const userApi = {
  getAllUsers: () => {
    const url = "auth-service/admin/users";
    return axiosManagement.get(url);
  },
  getBestSellers: () => {
    const url = "auth-service/admin/statistic/sell-users";
    return axiosManagement.get(url);
  },
  statisticUserByMonth: () => {
    const url = "auth-service/admin/statistic/users-created";
    return axiosManagement.get(url);
  },
};

export default userApi;
