import { Outlet } from "react-router";
import { MonitoringNavbar } from "../main";

export const MonitoringRoot = () => {
  return (
    <div>
      <Outlet />
      <MonitoringNavbar />
    </div>
  );
};
