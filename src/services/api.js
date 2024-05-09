import axiosInstance from "../../axiosInstance";
import { toast } from "react-toastify";

export const uploadCV = (data) => {
  const response = axiosInstance.post("store/cv", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log("response: ", response);
};

export const scheduleInterview = async () => {
  const res = await axiosInstance.get("intlists");
  console.log("🚀 ~ scheduleInterview ~ res:", res);
  return res;
};

export const cvList = async () => {
  const cvl = await axiosInstance.get("cvlists");
  console.log("🚀 ~ cvList ~ cvl:", cvl);
  return cvl;
};

export const deleteCV = async (id) => {
  const delfile = await axiosInstance.post(`delete/cv/${id}`);
  console.log("🚀 ~ deleteCV ~ delfile:", delfile);

  // setReload(Math.random());
};

export const updateCV = async (id, data) => {
  const updatefile = await axiosInstance.post(`update/cv/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  toast.success("Success Updated");
  console.log("🚀 ~ updateCV ~ updatefile:", updatefile);
};

export const UserList = async () => {
  const user = await axiosInstance.get("users");
  // console.log("🚀 ~ UserList ~ user:", user);
  return user;
};
