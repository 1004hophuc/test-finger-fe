//Modules
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/route/privateRoute";
import { DashBoardAdmin } from "../pages/dashBoard/dashBoardAdmin";
import { DashBoardFanPagePublic } from "../pages/dashBoard/dashBoardFanPagePublic";
import { DashBoardUser } from "../pages/dashBoard/dashBoardForUser";
import { DashBoardSuperAdmin } from "../pages/dashBoard/dashBoardSuperAdmin";
import { DashBoardUserInActive } from "../pages/dashBoard/dashBoardUserInActive";
import { Home } from "../pages/home/home";
import HomeLoginRegister from "../pages/homeLoginRegister/homeLoginRegister";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute roles={["Super"]}>
            <DashBoardSuperAdmin />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<HomeLoginRegister />} />

      <Route
        path="/user"
        element={
          <PrivateRoute roles={["User", "Admin"]}>
            <DashBoardUser />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <PrivateRoute roles={["Admin"]}>
            <DashBoardAdmin />
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboardInactive"
        element={
          <PrivateRoute roles={["Admin"]}>
            <DashBoardUserInActive />
          </PrivateRoute>
        }
      />

      <Route path="/public" element={<DashBoardFanPagePublic />} />
    </Routes>
  );
};
