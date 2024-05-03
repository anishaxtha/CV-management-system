import axiosInstance from "../../axiosInstance";

export const uploadCV = (data) => {
  const response = axiosInstance.post("store/cv", data);
  console.log("response: ", response);
};
