import axiosManagement from "../axiosAuthenService";

const categoryApi = {
  getAllCategoriesData: () => {
    const url = `post-service/categories/`;
    return axiosManagement.get(url, {});
  },
  createCategory: ({ name }) => {
    const data = {
      name,
    };
    const url = `post-service/categories/`;
    return axiosManagement.post(url, data);
  },
  statisticCategory: () => {
    const url = `post-service/statistics/categories/number-of-posts/`;
    return axiosManagement.get(url);
  },
};

export default categoryApi;
