import axiosManagement from "../axiosAuthenService";

const categoryApi = {
  getAllCategoriesData: () => {
    const url = `post-service/categories/`;
    return axiosManagement.get(url, {});
  },
};

export default categoryApi;
