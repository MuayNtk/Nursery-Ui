import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import { Chip } from "@mui/material";

// ✅ ใช้ i18n สำหรับสลับภาษา
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

const PrimarySearchAppBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  // ✅ ภาษาค่าเริ่มต้น 'jp' และจำค่าล่าสุดใน localStorage
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState<string>(
    () => localStorage.getItem("lang") || "jp"
  );
  React.useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [i18n, lang]);
  const toggleLanguage = () => {
    const next = lang === "jp" ? "en" : "jp";
    setLang(next);
    localStorage.setItem("lang", next);
    i18n.changeLanguage(next);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    // Redirect to login page
    navigate("/welcome");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <AccountCircle />
        <p className="pl-2">Profile</p>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <LogoutIcon />
        <p className="pl-2">Logout</p>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p className="pr-3">Profile</p>
      </MenuItem>

      {/* ✅ รายการสลับภาษาในเมนูมือถือ */}
      <MenuItem onClick={toggleLanguage}>
        <Chip label={lang.toUpperCase()} size="small" variant="outlined" />
        <p className="pl-2">Language</p>
      </MenuItem>

      <MenuItem onClick={handleLogout}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="default"
        >
          <LogoutIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  // Retrieve role from localStorage
  const username = localStorage.getItem("username");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
  position="sticky"
  sx={{
    // ใช้ค่า var(--sidebar-w) ถ้าไม่มีให้ fallback เป็น 240px
    width: { xs: '100%', sm: 'calc(100% - var(--sidebar-w, 240px))' },
    ml: { sm: 'var(--sidebar-w, 240px)' },

    // ให้อยู่เหนือ Drawer และ transition ลื่น ๆ ตอนหุบ/ขยาย
    zIndex: (theme) => theme.zIndex.drawer + 1,
    transition: (theme) =>
      theme.transitions.create(['width', 'margin-left'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
  }}
>
        <Toolbar className="bg-white">
          <Box
            sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}
          >
            {username && (
              <Chip
                label={username}
                color="info"
                size="small"
                sx={{ height: "36px", display: "flex", alignItems: "center" }}
              />
            )}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle className="text-black" />
            </IconButton>

            <Chip
              label={lang.toUpperCase()}
              onClick={toggleLanguage}
              size="small"
              variant="outlined"
              sx={{
                height: "36px",
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />
          </Box>

          {/* เมนูมือถือ (ไอคอนสามจุด) */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon className="text-black" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default PrimarySearchAppBar;
