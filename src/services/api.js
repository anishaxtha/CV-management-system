import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
// import { toast } from "react-toastify";

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

export const AssignTask = async (id) => {
  const task = await axiosInstance.post(`assign/task/${id}`);

  console.log("🚀 ~ AssignTask ~ task:", task);
};

export const Loginpage = async (email, password) => {
  try {
    const login = await axiosInstance.post("login", {
      email: email,
      password: password,
    });
    console.log("🚀 ~ Loginpage ~ login:", login);
    window.location.href = "/dashboard";
    // return login, (<Redirect to="/dashboard" />);
    return login;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
