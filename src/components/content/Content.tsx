import React from 'react';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import CustomizedBreadcrumbs from './breadcrumbs';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
interface ContentMainProps {
  children: React.ReactNode;
}

export default function ContentMain({ children }: ContentMainProps) {
  const location = useLocation();
  
  const breadcrumbs = React.useMemo(() => {
    switch (location.pathname) {
      case '/dashboard':
        return [
          { label: 'ホーム', href: '/dashboard', icon: <HomeIcon fontSize="small" /> },
        ];
      case '/teacher/todolist':
        return [
          { label: '保育士', href: '#', icon: <HomeIcon fontSize="small" /> },
          { label: '業務', href: '/teacher/todolist', icon: <BusinessCenterIcon fontSize="small" /> },
        ];
      case '/teacher/listleave':
        return [
          { label: '保育士', href: '#', icon: <HomeIcon fontSize="small" /> },
          { label: '休暇届', href: '/teacher/todolist', icon: <InsertInvitationOutlinedIcon fontSize="small" /> },
        ];
      default:
        return [
          { label: 'ホーム', href: '/dashboard', icon: <HomeIcon fontSize="small" /> },
        ];
    }
  }, [location.pathname]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <main className="flex-1 overflow-y-auto p-4 bg-slate-50 md:ml-72 mt-2 md:mr-2 mb-2 h-screen">
        <CustomizedBreadcrumbs breadcrumbs={breadcrumbs} />
        {children}
      </main>
    </Box>
  );
}
