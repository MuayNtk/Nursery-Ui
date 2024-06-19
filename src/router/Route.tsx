import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// import Login from "../pages/Login";
import WelcomePage from "../pages/WelcomePages";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardAdminPages from "../pages/DashboardAdminPages";
import DashboardTeacherPage from "../pages/teacher/DashboardTeacherPages"
import LayoutPage from "../layout/LayoutPage";
import ListLeavePages from "../pages/teacher/ListLeavePages";
import ListMenuAccPages from "../pages/accounting/ListMenuAccPages";
import ListMenuReportPages from "../pages/report/ListMenuReportPages";
import InfoFormPages from "../pages/setting/InfoFormPages";

const Router = createBrowserRouter([
  {
    path: "/welcome",
    element: <WelcomePage/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <LayoutPage />,
    children: [                    
      {
        path: "/dashboard",
        element: <DashboardAdminPages />
      },
      {
        path: "/teacher/todolist",
        element: <DashboardTeacherPage />
      },
      {
        path: "/teacher/listleave",
        element: <ListLeavePages />
      },
      {
        path: "/accounting/listacc",
        element: <ListMenuAccPages />
      },
      {
        path: "/report/listreport",
        element: <ListMenuReportPages />
      },
      {
        path: "/setting/infoform",
        element: <InfoFormPages />
      }
    ]
  },
  
]);

export default function Route() {
  return <RouterProvider router={Router} />;
}
