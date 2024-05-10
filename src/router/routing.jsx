import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import SignUp from "../components/SignUp";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Uploadprofile from "../components/Uploadprofile";
import ScheduleInterview from "../components/ScheduleInterview";
import CvList from "../components/CvList";
import OfferManagement from "../components/OfferManagement";
import UploadAssessment from "../components/UploadAssessment";
import EvaluteAssessment from "../components/EvaluteAssessment";

const Routing = () => {
  const pathname = useLocation().pathname;
  const ignoredRoutes = ["/login", "/signup"];
  return (
    <div>
      <div className={`${ignoredRoutes.includes(pathname) ? "hidden" : ""} `}>
        <Header className="" />
      </div>
      <div className="flex w-full">
        <div
          className={`${
            ignoredRoutes.includes(pathname) ? "hidden" : ""
          } w-72 `}
        >
          <Sidebar />
        </div>
        <div
          className={`${ignoredRoutes.includes(pathname) ? "w-full" : "w-3/4"}`}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Uploadprofile />} />
            <Route path="/cvlist" element={<CvList />} />
            <Route path="/offer" element={<OfferManagement />} />
            <Route path="/schedule" element={<ScheduleInterview />} />
            <Route path="/upload" element={<UploadAssessment />} />
            <Route path="/evalute" element={<EvaluteAssessment />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Routing;
