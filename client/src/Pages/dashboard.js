import "./dashboard.css";
import SideBar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <br />
      <div className="sss">
        <div className="sidebar-1">
          <SideBar />
        </div>
        <div className="sidebar-2">
          <Outlet/>
        </div>
      </div>
      <br />
    </>
  );
};

export default Dashboard;
