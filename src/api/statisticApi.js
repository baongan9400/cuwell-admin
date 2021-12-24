import axiosManagement from "./axiosAuthenService";

const statisticApi = {
  getProductStatistic: () => {
    const url = `post-service/statistics/payments/by-month/`;
    return axiosManagement.get(url);
  },
  getSalesStatistic: () => {
    const url = `post-service/statistics/posts/by-month/`;
    return axiosManagement.get(url);
  },
  getUserStatistic: () => {
    const url = `auth-service/posts/`;
    return axiosManagement.get(url);
  },
};

export default statisticApi;
