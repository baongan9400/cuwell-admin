import axiosManagement from "./axiosAuthenService";

const postApi = {
  getSearchPostData: (requestParams) => {
    const url = `post-service/posts/`;
    return axiosManagement.get(url, { params: requestParams });
  },
  blockPost: (pid) => {
    let formData = new FormData();
    formData.append("is_blocked", true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const url = `post-service/posts/${pid}/block/`;
    return axiosManagement.put(url, formData, config);
  },
  getPostById: (pid) => {
    console.log("call api");
    const url = `post-service/posts/${pid}/`;
    return axiosManagement.get(url);
  },
};

export default postApi;
