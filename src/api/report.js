import axiosManagement from "./axiosAuthenService";

const reportApi = {
  getAllReportData: () => {
    const url = `post-service/post-reposts/`;
    return axiosManagement.get(url);
  }
};

export default reportApi;
