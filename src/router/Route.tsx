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
import StudentPages from "../pages/student/StudentPages";
import ClassRoomPages from "../pages/class/ClassRoomPages";
import LeaveAddPages from "../pages/teacher/LeaveAddPages";
import InfoTeachListPages from "../pages/teacher/infostaff/InfoStaffListPages";
import AttendanceReportPages from "../pages/report/AttendanceReportPages";
import AttendanceMonthPages from "../pages/report/AttendanceMonthPages";
import OverallPlanPages from "../pages/report/OverallPlanPages";
import StudentHistoryPages from "../pages/student/studenthistory/StudentHistoryPages";
import HealthCheckFormPages from "../pages/student/studenthistory/HealthCheckPages";

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
        path: "/report",
        element: <ListMenuReportPages />
      },
      {
        path: "/report/attendance",
        element: <AttendanceReportPages />
      },
      {
        path: "/report/attendancemonth",
        element: <AttendanceMonthPages />
      },
      {
        path: "/report/overallplan",
        element: <OverallPlanPages />
      },
      {
        path: "/setting/infoform",
        element: <InfoFormPages />
      },
      {
        path: "/student",
        element: <StudentPages />
      }, 
      {
        path: "/student/History",
        element: <StudentHistoryPages />
      },
      {
        path: "/student/Health",
        element: <HealthCheckFormPages />
      },
      {
        path: "/class",
        element: <ClassRoomPages />
      },
      {
        path: "/teacher/leaveadd",
        element: <LeaveAddPages />
      },
      {
        path: "/infoteach",
        element: <InfoTeachListPages />
      }
    ]
  },
  
]);

export default function Route() {
  return <RouterProvider router={Router} />;
}
