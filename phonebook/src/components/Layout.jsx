import { Suspense } from "react";
import AppBar from "../components/AppBar";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
