import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// import Login from "../pages/Login";
import WelcomePage from "../pages/WelcomePages";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardAdminPages from "../pages/DashboardAdminPages";
import LayoutPage from "../layout/LayoutPage";

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
        element: <DashboardAdminPages />
      }
    ]
  },
  
]);

export default function Route() {
  return <RouterProvider router={Router} />;
}
