import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../components/LoginPage";
// import Register from "../components/Register";
import SignUp from "../components/SignUp";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Uploadprofile from "../components/Uploadprofile";
import ScheduleInterview from "../components/ScheduleInterview";
import CvList from "../components/CvList";

const Routing = () => {
  // let location = useLocation();
  const pathname = useLocation().pathname;
  const ignoredRoutes = ["/login", "/register"];
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
        <div className="w-3/4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Uploadprofile />} />
            <Route path="/cvlist" element={<CvList />} />
            <Route path="/schedule" element={<ScheduleInterview />} />
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
