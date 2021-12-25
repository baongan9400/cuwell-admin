import axiosManagement from "./axiosAuthenService";

const statisticApi = {
  getSalesStatistic: () => {
    const url = `post-service/statistics/payments/by-month/`;
    return axiosManagement.get(url);
  },
  getProductStatistic: () => {
    const url = `post-service/statistics/posts/by-month/`;
    return axiosManagement.get(url);
  },
};

export default statisticApi;
