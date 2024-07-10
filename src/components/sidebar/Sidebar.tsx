
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
// import { useAuth } from '../../hooks/use-auth';
import Nusery from '../../assets/Icons/sidebaricon/Nusery.svg';
import Dashboard from '../../assets/Icons/sidebaricon/Dashboard.svg';
// import logoutt from '../../assets/Icons/sidebaricon/logout.svg';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import EscalatorWarningOutlinedIcon from '@mui/icons-material/EscalatorWarningOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const drawerWidth = 280;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window?: () => Window;
}

export default function Sidebar(props: Props) {

    const location = useLocation();
    const [highlightedItem, setHighlightedItem] = React.useState('/'); // Initial highlighted item

    React.useEffect(() => {
        setHighlightedItem(location.pathname);
    }, [location]);

    // const { authUser, logout } = useAuth();
    // const handleLogout = () => {
    //     logout();
    // };

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

    const handleClick = () => {
        setOpen(!open);
    };

    const [open2, setOpen2] = React.useState(false);

    const handleClick2 = () => {
        setOpen2(!open2);


    };

    const [open3, setOpen3] = React.useState(false);

    const handleClick3 = () => {
        setOpen3(!open3);


    };

    const [open4, setOpen4] = React.useState(false);

    const handleClick4 = () => {
        setOpen4(!open4);


    };

    const drawer = (
        <div>
            <Link to={'/dashboard'}>
                <ListItem disablePadding className='text-white rounded-lg mt-2 mb-2 group pl-15'>
                    <ListItemButton>
                        <img src={Nusery} />
                        <Typography variant="h6" component="div" style={{ fontWeight: 'bold', color: 'white', paddingLeft: '10px' }} >
                            Nursery
                        </Typography>
                    </ListItemButton>
                </ListItem>
            </Link>

            <Divider className='bg-white' />

            <Link to={'/dashboard'}>
                <ListItem
                    disablePadding
                    className={`text-white rounded-lg mt-2 mb-2 pl-4 group ${highlightedItem === '/dashboard' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                        }`}
                >
                    <ListItemButton>
                        <img src={Dashboard} />
                        <Typography variant="subtitle2" component="div" className='text-white pl-3 py-2 '>
                            ホーム
                        </Typography>
                    </ListItemButton>
                </ListItem>
            </Link>

            <ListItem disablePadding onClick={handleClick} className='pl-4 text-white rounded-lg dark:text-white  mt-2 mb-2 group '>
                <ListItemButton>
                    <EscalatorWarningOutlinedIcon />
                    <Typography variant="subtitle2" component="div" className='text-white pl-3 py-2 '>
                        保育士
                    </Typography>
                    <List sx={{ pl: 13 }}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </List>
                </ListItemButton>
            </ListItem>
            <Collapse in={open} unmountOnExit>
                <Link to={'/teacher/todolist'}>
                    <ListItem
                        disablePadding
                        className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/teacher/todolist' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                            }`}
                    >
                        <ListItemButton sx={{ pl: 4 }} className=''>
                            <ListItemIcon>
                                <BusinessCenterIcon className='ml-5 text-white' />
                            </ListItemIcon>
                            <ListItemText primary="業務" className='text-white pt-1 ' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to={'/teacher/listleave'}>
                    <ListItem
                        disablePadding
                        className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/teacher/listleave' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                            }`}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <InsertInvitationOutlinedIcon className='ml-5 text-white' />
                            </ListItemIcon>
                            <ListItemText primary="休暇届" className='text-white  pt-1' />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </Collapse>

            <ListItem disablePadding onClick={handleClick3} className='pl-4 text-white rounded-lg dark:text-white  mt-2 mb-2 group '>
                <ListItemButton>
                    <EscalatorWarningOutlinedIcon />
                    <Typography variant="subtitle2" component="div" className='text-white pl-3 py-2 '>
                        Student
                    </Typography>
                    <List sx={{ pl: 12.5 }}>
                        {open3 ? <ExpandLess /> : <ExpandMore />}
                    </List>
                </ListItemButton>
            </ListItem>
            <Collapse in={open3} unmountOnExit>
                <Link to={'/student'}>
                    <ListItem
                        disablePadding
                        className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/teacher/todolist' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                            }`}
                    >
                        <ListItemButton sx={{ pl: 4 }} className=''>
                            <ListItemIcon>
                                <SupervisorAccountOutlinedIcon className='ml-5 text-white' />
                            </ListItemIcon>
                            <ListItemText primary="園児管理" className='text-white pt-1 ' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to={'/class'}>
                    <ListItem
                        disablePadding
                        className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/teacher/listleave' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                            }`}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <ClassOutlinedIcon className='ml-5 text-white' />
                            </ListItemIcon>
                            <ListItemText primary="クラス管理" className='text-white  pt-1' />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </Collapse>

            <ListItem disablePadding onClick={handleClick4} className='pl-4 text-white rounded-lg dark:text-white  mt-2 mb-2 group '>
                <ListItemButton>
                    <EscalatorWarningOutlinedIcon />
                    <Typography variant="subtitle2" component="div" className='text-white pl-3 py-2 '>
                    Accountinfo
                    </Typography>
                    <List sx={{ pl: 9 }}>
                        {open4 ? <ExpandLess /> : <ExpandMore />}
                    </List>
                </ListItemButton>
            </ListItem>
            <Collapse in={open4} unmountOnExit>
            <Link to={'/accounting'}>
                    <ListItem
                        disablePadding
                        className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/teacher/todolist' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                            }`}
                    >
                        <ListItemButton sx={{ pl: 4 }} className=''>
                            <ListItemIcon>
                                <AccountBalanceWalletOutlinedIcon className='ml-5 text-white' />
                            </ListItemIcon>
                            <ListItemText primary=" 経理" className='text-white pt-1 ' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to={'/infoteach'}>
                    <ListItem
                        disablePadding
                        className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/teacher/listleave' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                            }`}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <ClassOutlinedIcon className='ml-5 text-white' />
                            </ListItemIcon>
                            <ListItemText primary=" 職員リスト" className='text-white  pt-1' />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </Collapse>

            

            <Link to={'/report'}>
                <ListItem
                    disablePadding
                    className={`text-white rounded-lg mt-2 mb-2 pl-4 group ${highlightedItem === '/report' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                        }`}
                >
                    <ListItemButton>
                        <ListAltOutlinedIcon />
                        <Typography variant="subtitle2" component="div" className='text-white pl-3 py-2 '>
                            レポート管理
                        </Typography>
                    </ListItemButton>
                </ListItem>
            </Link>
            <ListItem disablePadding onClick={handleClick2} className='pl-4 text-white rounded-lg dark:text-white  mt-2 mb-2 group '>
                <ListItemButton>
                    <SettingsOutlinedIcon />
                    <Typography variant="subtitle2" component="div" className='text-white pl-3 py-2 '>
                        マスタ設定
                    </Typography>
                    <List sx={{ pl: 10 }}>
                        {open2 ? <ExpandLess /> : <ExpandMore />}
                    </List>
                </ListItemButton>
            </ListItem>
            <Collapse in={open2} unmountOnExit>
                <Link to={'/setting/info'}>
                    <ListItem
                        disablePadding
                        className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/setting/info' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                            }`}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <AccountCircleOutlinedIcon className='ml-5 text-white' />
                            </ListItemIcon>
                            <ListItemText primary="基本情報" className='text-white  pt-1' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to={'/infostaff'}>
                    <ListItem
                        disablePadding
                        className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/infostaff' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                            }`}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <AccountBoxOutlinedIcon className='ml-5 text-white' />
                            </ListItemIcon>
                            <ListItemText primary="役員情報" className='text-white  pt-1' />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </Collapse>

            {/* <div className='mt-5'>
                <Divider className='bg-white ' />
                <ListItem onClick={handleLogout} disablePadding className='pl-4 text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 mt-2 mb-2 group '>
                    <ListItemButton>
                        <img src={logoutt} />
                        <Typography variant="subtitle2" component="div" className='text-white pl-3 py-2 '>
                            Logout
                        </Typography>
                    </ListItemButton>
                </ListItem>
            </div > */}

        </div>

    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{
                    zIndex: 100, position: 'absolute', top: -8, left: 18,
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <MenuIcon className='text-black' />
            </IconButton>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    PaperProps={{ sx: { backgroundColor: "#005C78" } }}
                    container={container}
                    variant="temporary"
                    anchor='left'
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    PaperProps={{ sx: { backgroundColor: "#005C78" } }}
                    variant="permanent"
                    anchor='left'
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>
    );
}
