import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { Link, useLocation } from "react-router-dom";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

// --- Icons for Master menu ---
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import GavelIcon from "@mui/icons-material/Gavel";
import SchoolIcon from "@mui/icons-material/School";
import AppsIcon from "@mui/icons-material/Apps";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useTranslation } from "react-i18next";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function Sidebar(props: Props) {
  const { t } = useTranslation(); // เรียกใช้แบบ t("sidebar.xxx")
  const location = useLocation();
  const [highlightedItem, setHighlightedItem] = React.useState("/");

  React.useEffect(() => {
    setHighlightedItem(location.pathname);
    // auto open "Master" when route under /master
    if (location.pathname.startsWith("/master")) {
      setOpenMaster(true);
    }
  }, [location]);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle: React.EventHandler<React.SyntheticEvent> = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  const [open3, setOpen3] = React.useState(false);
  const handleClick3 = () => setOpen3(!open3);

  const [open4, setOpen4] = React.useState(false);
  const handleClick4 = () => setOpen4(!open4);

  // --- NEW: Master menu open state ---
  const [openMaster, setOpenMaster] = React.useState(false);
  const handleClickMaster = () => setOpenMaster(!openMaster);

  const role = localStorage.getItem("role");

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        sx={{
          zIndex: 100,
          position: "absolute",
          top: -8,
          left: 18,
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <MenuIcon className="text-black" />
      </IconButton>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile */}
        <Drawer
          PaperProps={{ sx: { backgroundColor: "#005C78" } }}
          container={window ? window().document.body : undefined}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {role && drawerContent(role)}
        </Drawer>

        {/* Desktop */}
        <Drawer
          PaperProps={{ sx: { backgroundColor: "#005C78" } }}
          variant="permanent"
          anchor="left"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100%",
            },
          }}
          open
        >
          {role && drawerContent(role)}
        </Drawer>
      </Box>
    </Box>
  );

  function drawerContent(role: string) {
    const activeClass = (path: string) =>
      `bg-[#1d5769] text-white rounded-lg group ${
        highlightedItem === path ? "bg-gray-600 dark:hover:bg-gray-700" : ""
      }`;

    return (
      <div>
        {/* Header Brand */}
        <Link to={"/dashboard"}>
          <ListItem
            disablePadding
            className="text-white rounded-lg mt-2 mb-2 group pl-15"
          >
            <ListItemButton>
              <HomeWorkIcon fontSize="small" />
              <Typography
                variant="h6"
                component="div"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                {t("sidebar.brand")}
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <Divider className="bg-white" />

        <Link to={"/dashboard"}>
          <ListItem
            disablePadding
            className={`text-white rounded-lg mt-2 mb-2 pl-2 group ${
              highlightedItem === "/dashboard"
                ? "bg-gray-600 dark:hover:bg-gray-700"
                : ""
            }`}
          >
            <ListItemButton>
              <DashboardIcon fontSize="small" />
              <Typography
                component="div"
                className="text-white pl-3 py-2 "
                sx={{ fontSize: "14px" }}
              >
                {t("sidebar.home")}
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        {/* ADMIN */}
        {role === "admin" && (
          <div>
            {/* 保育士 / Teacher */}
            <ListItem
              disablePadding
              onClick={handleClick}
              className="pl-2 text-white rounded-lg dark:text-white  mt-2 mb-2 group "
            >
              <ListItemButton>
                <EscalatorWarningOutlinedIcon fontSize="small" />
                <Typography
                  component="div"
                  className="text-white pl-3 py-2 pt-3 "
                  sx={{ fontSize: "14px" }}
                >
                  {t("sidebar.group_teacher")}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  {open ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
            </ListItem>
            <Collapse in={open} unmountOnExit>
              <Link to={"/teacher/todolist"}>
                <ListItem
                  disablePadding
                  className={activeClass("/teacher/todolist")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <BusinessCenterIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.teacher_tasks")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/teacher/listleave"}>
                <ListItem
                  disablePadding
                  className={activeClass("/teacher/listleave")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <InsertInvitationOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.teacher_leave")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/teacher/shift"}>
                <ListItem
                  disablePadding
                  className={activeClass("/teacher/shift")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <QueryBuilderIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.teacher_shift")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            </Collapse>

            {/* 学生管理 / Student Management */}
            <ListItem
              disablePadding
              onClick={handleClick3}
              className="pl-2 text-white rounded-lg dark:text-white  mt-2 mb-2 group "
            >
              <ListItemButton>
                <BadgeOutlinedIcon fontSize="small" />
                <Typography
                  component="div"
                  className="text-white pl-3 py-2 pt-3 "
                  sx={{ fontSize: "14px" }}
                >
                  {t("sidebar.group_students")}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  {open3 ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
            </ListItem>
            <Collapse in={open3} unmountOnExit>
              <Link to={"/student"}>
                <ListItem disablePadding className={activeClass("/student")}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <SupervisorAccountOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.students_children")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/class"}>
                <ListItem disablePadding className={activeClass("/class")}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ClassOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.students_class")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            </Collapse>

            {/* 経理管理 / Accounting */}
            <ListItem
              disablePadding
              onClick={handleClick4}
              className="pl-2 text-white rounded-lg dark:text-white  mt-2 mb-2 group "
            >
              <ListItemButton>
                <EscalatorWarningOutlinedIcon fontSize="small" />
                <Typography
                  component="div"
                  className="text-white pl-3 py-2 pt-4"
                  sx={{ fontSize: "14px" }}
                >
                  {t("sidebar.group_accounting")}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  {open4 ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
            </ListItem>
            <Collapse in={open4} unmountOnExit>
              <Link to={"/accounting"}>
                <ListItem disablePadding className={activeClass("/accounting")}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AccountBalanceWalletOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.accounting_main")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/infoteach"}>
                <ListItem disablePadding className={activeClass("/infoteach")}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ClassOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.accounting_staff_list")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            </Collapse>

            {/* レポート管理 */}
            <Link to={"/report"}>
              <ListItem
                disablePadding
                className={`text-white rounded-lg mt-2 mb-2 pl-2 group ${
                  highlightedItem === "/report"
                    ? "bg-gray-600 dark:hover:bg-gray-700"
                    : ""
                }`}
              >
                <ListItemButton>
                  <ListAltOutlinedIcon fontSize="small" />
                  <Typography
                    component="div"
                    className="text-white pl-3 py-2 "
                    sx={{ fontSize: "14px" }}
                  >
                    {t("sidebar.report")}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link>

            {/* マスタ管理 */}
            <ListItem
              disablePadding
              onClick={handleClickMaster}
              className="pl-2 text-white rounded-lg dark:text-white mt-2 mb-2 group"
            >
              <ListItemButton>
                <MenuBookIcon fontSize="small" />
                <Typography
                  component="div"
                  className="text-white pl-3 py-2 pt-3 "
                  sx={{ fontSize: "14px" }}
                >
                  {t("sidebar.group_master")}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  {openMaster ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
            </ListItem>

            <Collapse in={openMaster} unmountOnExit>
              {/* === 管理グループ === */}
              {/* <Link to={"/master/overallplanmain"}>
                <ListItem
                  disablePadding
                  className={activeClass("/master/overallplanmain")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <TaskAltIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("sidebar.master_overall_plan")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/master/childcarepolicy"}>
                <ListItem
                  disablePadding
                  className={activeClass("/master/childcarepolicy")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GavelIcon className="ml-5 text-white" fontSize="small" />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("sidebar.master_policy")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/master/educationandchildcare"}>
                <ListItem
                  disablePadding
                  className={activeClass("/master/educationandchildcare")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <SchoolIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("sidebar.master_pillars")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/master/specificinitiatives"}>
                <ListItem
                  disablePadding
                  className={activeClass("/master/specificinitiatives")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AppsIcon className="ml-5 text-white" fontSize="small" />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("sidebar.master_initiatives")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/master/annualschedule"}>
                <ListItem
                  disablePadding
                  className={activeClass("/master/annualschedule")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <CalendarMonthIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("sidebar.master_annual_events")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/master/agegroups"}>
                <ListItem
                  disablePadding
                  className={activeClass("/master/agegroups")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ChildCareIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("sidebar.master_age_groups")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/master/developmentarea"}>
                <ListItem
                  disablePadding
                  className={activeClass("/master/developmentarea")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PsychologyIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("sidebar.master_domains")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/master/aboutsupdesk"}>
                <ListItem
                  disablePadding
                  className={activeClass("/master/aboutsupdesk")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ListAltIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("sidebar.master_domain_guide")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/master/subarea"}>
                <ListItem
                  disablePadding
                  className={activeClass("/master/subarea")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <CategoryIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("sidebar.master_domain_targets")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/master/infoarea"}>
                <ListItem
                  disablePadding
                  className={activeClass("/master/infoarea")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <InfoIcon className="ml-5 text-white" fontSize="small" />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("sidebar.master_domain_extra")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/master/carecontent"}>
                <ListItem
                  disablePadding
                  className={activeClass("/master/carecontent")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FavoriteIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("sidebar.master_care_goals")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              {/* --- 区切り線: 設定系 --- */}
              {/* <Divider className="bg-white/30 my-2" />  */}

              {/* === 設定グループ === */}
              <Link to={"/setting/info"}>
                <ListItem
                  disablePadding
                  className={activeClass("/setting/info")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AccountCircleOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.settings_basic_info")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/infostaff"}>
                <ListItem disablePadding className={activeClass("/infostaff")}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AccountBoxOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.settings_executives")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/setting/basicdevplan"}>
                <ListItem
                  disablePadding
                  className={activeClass("/setting/basicdevplan")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AccountBoxOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.settings_basicdevplan")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            </Collapse>
          </div>
        )}

        {/* TEACHER */}
        {role === "teacher" && (
          <>
            <ListItem
              disablePadding
              onClick={handleClick}
              className="pl-2 text-white rounded-lg dark:text-white  mt-2 mb-2 group "
            >
              <ListItemButton>
                <EscalatorWarningOutlinedIcon fontSize="small" />
                <Typography
                  component="div"
                  className="text-white pl-3 py-2 pt-3 "
                  sx={{ fontSize: "14px" }}
                >
                  {t("sidebar.group_teacher")}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  {open ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
            </ListItem>
            <Collapse in={open} unmountOnExit>
              <Link to={"/teacher/todolist"}>
                <ListItem
                  disablePadding
                  className={activeClass("/teacher/todolist")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <BusinessCenterIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.teacher_tasks")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/teacher/listleave"}>
                <ListItem
                  disablePadding
                  className={activeClass("/teacher/listleave")}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <InsertInvitationOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.teacher_leave")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            </Collapse>

            <ListItem
              disablePadding
              onClick={() => setOpen3(!open3)}
              className="pl-2 text-white rounded-lg dark:text-white mt-2 mb-2 group "
            >
              <ListItemButton>
                <BadgeOutlinedIcon fontSize="small" />
                <Typography
                  component="div"
                  className="text-white pl-3 py-2 pt-3 "
                  sx={{ fontSize: "14px" }}
                >
                  {t("sidebar.group_students")}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  {open3 ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
            </ListItem>
            <Collapse in={open3} unmountOnExit>
              <Link to={"/student"}>
                <ListItem disablePadding className={activeClass("/student")}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <SupervisorAccountOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.students_children")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/class"}>
                <ListItem disablePadding className={activeClass("/class")}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ClassOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.students_class")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            </Collapse>
          </>
        )}

        {/* ACC */}
        {role === "acc" && (
          <>
            <ListItem
              disablePadding
              onClick={handleClick4}
              className="pl-2 text-white rounded-lg dark:text-white  mt-2 mb-2 group "
            >
              <ListItemButton>
                <EscalatorWarningOutlinedIcon fontSize="small" />
                <Typography
                  component="div"
                  className="text-white pl-3 py-2 pt-4"
                  sx={{ fontSize: "14px" }}
                >
                  {t("sidebar.group_accounting")}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  {open4 ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
            </ListItem>
            <Collapse in={open4} unmountOnExit>
              <Link to={"/accounting"}>
                <ListItem disablePadding className={activeClass("/accounting")}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AccountBalanceWalletOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.accounting_main")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/infoteach"}>
                <ListItem disablePadding className={activeClass("/infoteach")}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ClassOutlinedIcon
                        className="ml-5 text-white"
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <Typography
                      className="text-white pl-1 pt-1"
                      sx={{ fontSize: "14px" }}
                    >
                      {t("sidebar.accounting_staff_list")}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            </Collapse>
          </>
        )}
      </div>
    );
  }
}
