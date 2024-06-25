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
import AttendanceReportPages from "../pages/report/AttendanceReportPages";
import AttendanceMonthPages from "../pages/report/AttendanceMonthPages";
import OverallPlanPages from "../pages/report/OverallPlanPages";
import StudentHistoryPages from "../pages/student/studenthistory/StudentHistoryPages";
import HealthCheckFormPages from "../pages/student/studenthistory/HealthCheckPages";
import InfoStaffListPages from "../pages/setting/InfoStaffListPages";
import InfoTeachListPages from "../pages/teacher/infoteach/InfoTeachListPages";
import InfoStaffFormPages from "../pages/setting/InfoStaffFormPages";
import ProgressdFourPages from "../pages/student/studentprogressd/ProgressdFourPages";
import ProgressdFivePages from "../pages/student/studentprogressd/ProgressdFivePages";
import ProgressdThreePages from "../pages/student/studentprogressd/ProgressdThreePages";
import ProgressdTwoPages from "../pages/student/studentprogressd/ProgressdrTwoPages";
import ProgressdZeroPages from "../pages/student/studentprogressd/ProgressdZeroPages";
import ProgressdOnePages from "../pages/student/studentprogressd/ProgressdOnePages";
import InformationPages from "../pages/setting/informationPages";

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
        path: "/setting/info",
        element: <InformationPages />
      },
      {
        path: "/setting/info/add",
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
        path: "/student/progressdzero",
        element: <ProgressdZeroPages />
      },
      {
        path: "/student/progressdone",
        element: <ProgressdOnePages />
      },
      {
        path: "/student/progressdtwo",
        element: <ProgressdTwoPages />
      },
      {
        path: "/student/progressdthree",
        element: <ProgressdThreePages />
      },
      {
        path: "/student/progressdfour",
        element: <ProgressdFourPages />
      },
      {
        path: "/student/progressdfive",
        element: <ProgressdFivePages />
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
      },
      {
        path: "/infostaff",
        element: <InfoStaffListPages />
      },
      {
        path: "/infostaff/infostaffadd",
        element: <InfoStaffFormPages />
      }
    ]
  },
  
]);

export default function Route() {
  return <RouterProvider router={Router} />;
}
