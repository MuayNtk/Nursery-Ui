import { createBrowserRouter, Navigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
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
import AnnualplanPages from "../pages/report/AnnualplanPages";
import MonthlyplanPages from "../pages/report/monthlyplan/MonthlyplanPages";
import WeeklyplanPages from "../pages/report/weeklyplan/WeeklyplanPages";
import CareDiaryPages from "../pages/report/CareDiaryPages";
import DaycareRecordPages from "../pages/student/studentdaycarerecord/DaycareRecordPages";
import OverallPlanAddPages from "../pages/report/OverallPlanAddPages";
import AnnualplanAddPages from "../pages/report/AnnualplanAddPages";
import CareDiaryAddPages from "../pages/report/CareDiaryAddPages";
import AddPerfPages from "../pages/accounting/addperf/AddPerfPages";
import MonthlyplanAddPages from "../pages/report/monthlyplan/MonthlyplanAddPages";
import InfoTeachAddPages from "../pages/teacher/infoteach/InfoTeachddPages";
import WeeklyplanAddPages from "../pages/report/weeklyplan/WeeklyplanAddPages";
import ActivityListPages from "../pages/accounting/activity/ActivityListPages";
import ActivityAddPage from "../pages/accounting/activity/ActivityAddPage";
import SupportFundAddPages from "../pages/accounting/supportfund/SupportFundAddPages";
import ChargePages from "../pages/accounting/charge/ChargePages";
import SupportFundListPages from "../pages/accounting/supportfund/SupportFundListPages";
import EnhancementPages from "../pages/accounting/enhancement/EnhancementPages";
import EnhancementAddPages from "../pages/accounting/enhancement/EnhancementAddPages";
import LunchSubsidyGrantPages from "../pages/accounting/lunch/LunchSubsidyGrantPages";
import LunchAddPages from "../pages/accounting/lunch/LunchAddPages";
// import SupportFundTabPages from "../pages/accounting/supportfund/SupportFundTabPages";

const Router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to="/welcome" replace />
  },
  {
    path: "/welcome",
    element: <WelcomePage />
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
        path: "/accounting",
        element: <ListMenuAccPages />
      },
      {
        path: "/accounting/addperf",
        element: <AddPerfPages />
      },
      {
        path: "/accounting/activity",
        element: <ActivityListPages />
      },
      {
        path: "/accounting/activity/add",
        element: <ActivityAddPage />
      },
      {
        path: "/accounting/supportfund",
        element: <SupportFundListPages />
      },
      {
        path: "/accounting/supportfund/add",
        element: <SupportFundAddPages />
      },
      {
        path: "/accounting/charge",
        element: <ChargePages />
      },
      {
        path: "/accounting/enhancement",
        element: <EnhancementPages />
      },
      {
        path: "/accounting/enhancement/add",
        element: <EnhancementAddPages />
      },
      {
        path: "/accounting/lunch",
        element: <LunchSubsidyGrantPages />
      },
      {
        path: "/accounting/lunch/add",
        element: <LunchAddPages />
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
        path: "/report/overallplan/add",
        element: <OverallPlanAddPages />
      },
      {
        path: "/report/annualplan",
        element: <AnnualplanPages />
      },
      {
        path: "/report/annualplan/add",
        element: <AnnualplanAddPages />
      },
      {
        path: "/report/monthlyplan",
        element: <MonthlyplanPages />
      },
      {
        path: "/report/monthlyplan/add",
        element: <MonthlyplanAddPages />
      },
      {
        path: "/report/weeklyplan",
        element: <WeeklyplanPages />
      },
      {
        path: "/report/weeklyplan/add",
        element: <WeeklyplanAddPages />
      },
      {
        path: "/report/carediary",
        element: <CareDiaryPages />
      },
      {
        path: "/report/carediary/add",
        element: <CareDiaryAddPages />
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
        path: "/student/daycare",
        element: <DaycareRecordPages />
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
        path: "/infoteach/add",
        element: <InfoTeachAddPages />
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
