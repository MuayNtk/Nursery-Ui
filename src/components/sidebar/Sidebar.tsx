import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
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
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

interface Props {
    window?: () => Window;
}

export default function Sidebar(props: Props) {
    const location = useLocation();
    const [highlightedItem, setHighlightedItem] = React.useState('/');

    React.useEffect(() => {
        setHighlightedItem(location.pathname);
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
  
    const role = localStorage.getItem('role');

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
                <Drawer
                    PaperProps={{ sx: { backgroundColor: "#005C78" } }}
                    container={window ? window().document.body : undefined}
                    variant="temporary"
                    anchor='left'
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {role && drawerContent(role)}

                </Drawer>

                <Drawer
                    PaperProps={{ sx: { backgroundColor: "#005C78" } }}
                    variant="permanent"
                    anchor='left'
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: '100%' },
                    }}
                    open
                >
                    
                    {role && drawerContent(role)}
                </Drawer>
            </Box>
        </Box>
    );

    function drawerContent(role: string) {
        return (
            <div>
                {/* Common items for both admin and teacher */}
                <Link to={'/dashboard'}>
                    <ListItem disablePadding className='text-white rounded-lg mt-2 mb-2 group pl-15'>
                        <ListItemButton>
                            <HomeWorkIcon fontSize="small" />
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
                        className={`text-white rounded-lg mt-2 mb-2 pl-2 group ${highlightedItem === '/dashboard' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                            }`}
                    >
                        <ListItemButton>
                            <DashboardIcon fontSize="small" />
                            <Typography component="div" className='text-white pl-3 py-2 ' sx={{ fontSize: '14px' }}>
                                ホーム
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                </Link>

                {/* Conditional rendering based on user role */}
                {role === 'admin' && (
                  <div>
        
                    <ListItem disablePadding onClick={handleClick} className='pl-2 text-white rounded-lg dark:text-white  mt-2 mb-2 group '>
                        <ListItemButton>
                            <EscalatorWarningOutlinedIcon fontSize="small"/>
                            <Typography  component="div" className='text-white pl-3 py-2 pt-3 ' sx={{ fontSize: '14px' }}>
                                保育士
                            </Typography>
                            <div 
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginLeft: 'auto',
                                }}
                            >
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </div>
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
                                        <BusinessCenterIcon className='ml-5 text-white' fontSize="small"/>
                                    </ListItemIcon>
                                    <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                        業務
                                    </Typography>
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
                                        <InsertInvitationOutlinedIcon className='ml-5 text-white' fontSize="small"/>
                                    </ListItemIcon>
                                    <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                        休暇届
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </Collapse>
        
                    <ListItem disablePadding onClick={handleClick3} className='pl-2 text-white rounded-lg dark:text-white  mt-2 mb-2 group '>
                        <ListItemButton>
                            <BadgeOutlinedIcon fontSize="small"/>
                            <Typography  component="div" className='text-white pl-3 py-2 pt-3 'sx={{ fontSize: '14px' }}>
                            学生管理
                            </Typography>
                            <div 
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginLeft: 'auto',
                                }}
                            >
                                {open3 ? <ExpandLess /> : <ExpandMore />}
                            </div>
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={open3} unmountOnExit>
                        <Link to={'/student'}>
                            <ListItem
                                disablePadding
                                className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/student' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                                    }`}
                            >
                                <ListItemButton sx={{ pl: 4 }} className=''>
                                    <ListItemIcon>
                                        <SupervisorAccountOutlinedIcon className='ml-5 text-white' fontSize="small"/>
                                    </ListItemIcon>
                                    <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                        園児管理
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        </Link>
        
                        <Link to={'/class'}>
                            <ListItem
                                disablePadding
                                className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/class' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                                    }`}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ClassOutlinedIcon className='ml-5 text-white' fontSize="small"/>
                                    </ListItemIcon>
                                    <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                        クラス管理
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </Collapse>
        
                    <ListItem disablePadding onClick={handleClick4} className='pl-2 text-white rounded-lg dark:text-white  mt-2 mb-2 group '>
                        <ListItemButton>
                            <EscalatorWarningOutlinedIcon fontSize="small"/>
                            <Typography  component="div" className='text-white pl-3 py-2 pt-4' sx={{ fontSize: '14px' }}>
                            経理管理
                            </Typography>
                            <div 
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginLeft: 'auto',
                                }}
                            >
                                {open4 ? <ExpandLess /> : <ExpandMore />}
                            </div>
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={open4} unmountOnExit>
                        <Link to={'/accounting'}>
                            <ListItem
                                disablePadding
                                className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/accounting' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                                    }`}
                            >
                                <ListItemButton sx={{ pl: 4 }} className=''>
                                    <ListItemIcon>
                                        <AccountBalanceWalletOutlinedIcon className='ml-5 text-white' fontSize="small"/>
                                    </ListItemIcon>
                                    <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                        経理
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        </Link>
        
                        <Link to={'/infoteach'}>
                            <ListItem
                                disablePadding
                                className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/infoteach' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                                    }`}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ClassOutlinedIcon className='ml-5 text-white' fontSize="small"/>
                                    </ListItemIcon>
                                    <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                        職員リスト
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </Collapse>
        
        
                    <Link to={'/report'}>
                        <ListItem
                            disablePadding
                            className={`text-white rounded-lg mt-2 mb-2 pl-2 group ${highlightedItem === '/report' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                                }`}
                        >
                            <ListItemButton>
                                <ListAltOutlinedIcon fontSize="small"/>
                                <Typography  component="div" className='text-white pl-3 py-2 ' sx={{ fontSize: '14px' }}>
                                    レポート管理
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <ListItem disablePadding onClick={handleClick2} className='pl-2 text-white rounded-lg dark:text-white  mt-2 mb-2 group '>
                        <ListItemButton>
                            <SettingsOutlinedIcon fontSize="small"/>
                            <Typography  component="div" className='text-white pl-3 py-2 ' sx={{ fontSize: '14px' }}>
                                マスタ設定
                            </Typography>
                            <div 
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginLeft: 'auto',
                                }}
                            >
                                {open2 ? <ExpandLess /> : <ExpandMore />}
                            </div>
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
                                        <AccountCircleOutlinedIcon className='ml-5 text-white' fontSize="small"/>
                                    </ListItemIcon>
                                    <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                        基本情報
                                    </Typography>
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
                                        <AccountBoxOutlinedIcon className='ml-5 text-white' fontSize="small"/>
                                    </ListItemIcon>
                                    <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                        役員情報
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </Collapse>
        
                </div>
                )}

                {role === 'teacher' && (
                    <>
                        <ListItem disablePadding onClick={handleClick} className='pl-2 text-white rounded-lg dark:text-white  mt-2 mb-2 group '>
                            <ListItemButton>
                                <EscalatorWarningOutlinedIcon fontSize="small"/>
                                <Typography  component="div" className='text-white pl-3 py-2 pt-3 ' sx={{ fontSize: '14px' }}>
                                    保育士
                                </Typography>
                                <div 
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginLeft: 'auto',
                                    }}
                                >
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </div>
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
                                            <BusinessCenterIcon className='ml-5 text-white' fontSize="small"/>
                                        </ListItemIcon>
                                        <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                            業務
                                        </Typography>
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
                                            <InsertInvitationOutlinedIcon className='ml-5 text-white' fontSize="small"/>
                                        </ListItemIcon>
                                        <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                            休暇届
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </Collapse>
                        <ListItem disablePadding onClick={() => setOpen3(!open3)} className='pl-2 text-white rounded-lg dark:text-white mt-2 mb-2 group '>
                            <ListItemButton>
                                <BadgeOutlinedIcon fontSize="small" />
                                <Typography component="div" className='text-white pl-3 py-2 pt-3 ' sx={{ fontSize: '14px' }}>
                                    学生管理
                                </Typography>
                                <div 
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginLeft: 'auto',
                                    }}
                                >
                                    {open3 ? <ExpandLess /> : <ExpandMore />}
                                </div>
                            </ListItemButton>
                        </ListItem>
                        <Collapse in={open3} unmountOnExit>
                            <Link to={'/student'}>
                                <ListItem
                                    disablePadding
                                    className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/student' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                                        }`}
                                >
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <SupervisorAccountOutlinedIcon className='ml-5 text-white' fontSize="small" />
                                        </ListItemIcon>
                                        <Typography component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                            園児管理
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Link>

                            <Link to={'/class'}>
                                <ListItem
                                    disablePadding
                                    className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/class' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                                        }`}
                                >
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <ClassOutlinedIcon className='ml-5 text-white' fontSize="small" />
                                        </ListItemIcon>
                                        <Typography component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                            クラス管理
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </Collapse>
                    </>
                )}

                {role === 'acc' && (
                    <>
                        <ListItem disablePadding onClick={handleClick4} className='pl-2 text-white rounded-lg dark:text-white  mt-2 mb-2 group '>
                            <ListItemButton>
                                <EscalatorWarningOutlinedIcon fontSize="small"/>
                                <Typography  component="div" className='text-white pl-3 py-2 pt-4' sx={{ fontSize: '14px' }}>
                                経理管理
                                </Typography>
                                <div 
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginLeft: 'auto',
                                    }}
                                >
                                    {open4 ? <ExpandLess /> : <ExpandMore />}
                                </div>
                            </ListItemButton>
                        </ListItem>
                        <Collapse  in={open4} unmountOnExit>
                            <Link to={'/accounting'}>
                                <ListItem
                                    disablePadding
                                    className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/accounting' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                                        }`}
                                >
                                    <ListItemButton sx={{ pl: 4 }} className=''>
                                        <ListItemIcon>
                                            <AccountBalanceWalletOutlinedIcon className='ml-5 text-white' fontSize="small"/>
                                        </ListItemIcon>
                                        <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                            経理
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
        
                            <Link to={'/infoteach'}>
                                <ListItem
                                    disablePadding
                                    className={`bg-[#1d5769] text-white rounded-lg group ${highlightedItem === '/infoteach' ? 'bg-gray-600 dark:hover:bg-gray-700' : ''
                                        }`}
                                >
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <ClassOutlinedIcon className='ml-5 text-white' fontSize="small"/>
                                        </ListItemIcon>
                                        <Typography  component="div" className='text-white pl-1 pt-1' sx={{ fontSize: '14px' }}>
                                            職員リスト
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
