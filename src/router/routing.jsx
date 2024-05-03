import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardProfile from "../components/DashboardProfile";
import LoginPage from "../components/LoginPage";
import Register from "../components/Register";
import SignUp from "../components/SignUp";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardProfile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
