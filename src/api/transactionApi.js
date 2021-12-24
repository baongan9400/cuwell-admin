import axiosManagement from "./axiosAuthenService";

const transactionApi = {
  getTopTransactions: () => {
    const url = "auth-service/admin/statistic/sell-users";
    return axiosManagement.get(url);
  },
};

export default transactionApi;
