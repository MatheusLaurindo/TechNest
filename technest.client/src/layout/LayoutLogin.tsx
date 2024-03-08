/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router";

function LayoutLogin() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default LayoutLogin;
