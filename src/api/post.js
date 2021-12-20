import axiosManagement from "./axiosAuthenService";

const postApi = {
    getSearchPostData :(requestParams) => {
        const url = `post-service/posts/`;
        return axiosManagement.get(url, { params: requestParams });
      }
};

export default postApi;
