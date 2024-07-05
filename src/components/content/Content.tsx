import React from 'react';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import CustomizedBreadcrumbs from './breadcrumbs';
import BadgeIcon from '@mui/icons-material/Badge';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ArticleIcon from '@mui/icons-material/Article';
import BallotIcon from '@mui/icons-material/Ballot';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BarChartIcon from '@mui/icons-material/BarChart';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
interface BreadcrumbItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

interface ContentMainProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentMain({ children, className }: ContentMainProps) {
  const location = useLocation();

  const breadcrumbs: BreadcrumbItem[] = React.useMemo(() => {
    const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
      '/dashboard': [{ label: 'ホーム', href: '/dashboard', icon: <HomeIcon fontSize="small" /> }],
      '/teacher/todolist': [{ label: '保育士', href: '/teacher/todolist', icon: <HomeIcon fontSize="small" /> }],
      '/teacher/listleave': [{ label: '休暇届', href: '/teacher/listleave', icon: <HomeIcon fontSize="small" /> }],
      '/teacher/leaveadd': [
        { label: '休暇届', href: '/teacher/listleave', icon: <HomeIcon fontSize="small" /> },
        { label: '休暇届', href: '#', icon: <InsertInvitationOutlinedIcon fontSize="small" /> },
      ],
      '/student': [{ label: '園児管理', href: '/student', icon: <HomeIcon fontSize="small" /> }],
      '/student/History': [
        { label: '園児管理', href: '/student', icon: <HomeIcon fontSize="small" /> },
        { label: '園児管理', href: '#', icon: <BadgeIcon fontSize="small" /> },
      ],
      '/student/daycare': [
        { label: '園児管理', href: '/student', icon: <HomeIcon fontSize="small" /> },
        { label: '保育所児童保育要録', href: '#', icon: <AssignmentIcon fontSize="small" /> },
      ],
      '/student/progressdzero': [
        { label: '園児管理', href: '/student', icon: <HomeIcon fontSize="small" /> },
        { label: '歳児保育経過記録', href: '#', icon: <AssessmentIcon fontSize="small" /> },
      ],
      '/accounting': [{ label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> }],
      '/accounting/activity': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/activity', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/accounting/activity/add': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/activity', icon: <ArticleIcon fontSize="small" /> },
        { label: '事業実施の選定', href: '#', icon: <BallotIcon fontSize="small" /> },
      ],
      '/accounting/enhancement': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/enhancement', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/accounting/enhancement/add': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/enhancement', icon: <ArticleIcon fontSize="small" /> },
        { label: '事業補助金交付申請書', href: '#', icon: <BallotIcon fontSize="small" /> },
      ],
      '/accounting/treatment': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: '処遇改善', href: '/accounting/treatment', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/accounting/careertraining': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: '処遇改善', href: '/accounting/treatment', icon: <ArticleIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/careertraining', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/accounting/careertraining/add': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: '処遇改善', href: '/accounting/treatment', icon: <ArticleIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/careertraining', icon: <ArticleIcon fontSize="small" /> },
        { label: '', href: '#', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/accounting/treatmentplan': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: '処遇改善', href: '/accounting/treatment', icon: <ArticleIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/treatmentplan', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/accounting/treatmentplan/add': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: '処遇改善', href: '/accounting/treatment', icon: <ArticleIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/treatmentplan', icon: <ArticleIcon fontSize="small" /> },
        { label: '年度賃金改善計画書', href: '#', icon: <AutoStoriesIcon fontSize="small" /> },
      ],
      '/accounting/rateapplication': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: '処遇改善', href: '/accounting/treatment', icon: <ArticleIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/rateapplication', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/accounting/rateapplication/add': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: '処遇改善', href: '/accounting/treatment', icon: <ArticleIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/rateapplication', icon: <ArticleIcon fontSize="small" /> },
        { label: '加算率認定', href: '#', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/accounting/requestbenefits': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: '処遇改善', href: '/accounting/treatment', icon: <ArticleIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/requestbenefits', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/accounting/requestbenefits/add': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: '処遇改善', href: '/accounting/treatment', icon: <ArticleIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/requestbenefits', icon: <ArticleIcon fontSize="small" /> },
        { label: '加算対象職員数計算表', href: '#', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/accounting/eligiblepersons': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: '処遇改善', href: '/accounting/treatment', icon: <ArticleIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/eligiblepersons', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/accounting/eligiblepersons/add': [
        { label: '経理', href: '/accounting', icon: <HomeIcon fontSize="small" /> },
        { label: '処遇改善', href: '/accounting/treatment', icon: <ArticleIcon fontSize="small" /> },
        { label: 'リスト', href: '/accounting/eligiblepersons', icon: <ArticleIcon fontSize="small" /> },
        { label: '平均年齢別児童数計算表', href: '#', icon: <BarChartIcon fontSize="small" /> },
      ],
      '/class': [
        { label: 'クラス管理', href: '/class', icon: <HomeIcon fontSize="small" /> },
      ],
      '/infoteach': [
        { label: '職員リスト', href: '/infoteach', icon: <HomeIcon fontSize="small" /> },
      ],
      '/infoteach/add': [
        { label: '職員リスト', href: '/infoteach', icon: <HomeIcon fontSize="small" /> },
        { label: '職員用', href: '#', icon: <HomeIcon fontSize="small" /> },
      ],
      '/report': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
      ],
      '/report/attendance': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: '児童出席簿', href: '#', icon: <DownloadForOfflineIcon fontSize="small" /> },
      ],
      '/report/attendancemonth': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: '月 児童出席簿 組', href: '#', icon: <DownloadForOfflineIcon fontSize="small" /> },
      ],
      '/report/overallplan': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/report/overallplan', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/report/overallplan/add': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/report/overallplan', icon: <ArticleIcon fontSize="small" /> },
        { label: '全体的な計画', href: '#', icon: <BallotIcon fontSize="small" /> },
      ],
      '/report/annualplan': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/report/annualplan', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/report/annualplan/add': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/report/annualplan', icon: <ArticleIcon fontSize="small" /> },
        { label: '年間指導計画を選択する', href: '#', icon: <WysiwygIcon fontSize="small" /> },
      ],
      '/report/monthlyplan': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/report/monthlyplan', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/report/monthlyplan/add': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/report/monthlyplan', icon: <ArticleIcon fontSize="small" /> },
        { label: '月指導計画 ', href: '#', icon: <WysiwygIcon fontSize="small" /> },

      ],
      '/report/weeklyplan': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/report/weeklyplan', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/report/weeklyplan/add': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/report/weeklyplan', icon: <ArticleIcon fontSize="small" /> },
        { label: '週案と保育日誌 ', href: '#', icon: <WysiwygIcon fontSize="small" /> },

      ],
      '/report/carediary': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/report/carediary', icon: <ArticleIcon fontSize="small" /> },
      ],
      '/report/carediary/add': [
        { label: 'レポート管理', href: '/report', icon: <HomeIcon fontSize="small" /> },
        { label: 'リスト', href: '/report/carediary', icon: <ArticleIcon fontSize="small" /> },
        { label: '個人カリキュラム ', href: '#', icon: <WysiwygIcon fontSize="small" /> },
      ],
      '/setting/info': [
        { label: 'マスタ設定', href: '/setting/info', icon: <HomeIcon fontSize="small" /> },
      ],
      '/setting/info/add': [
        { label: 'マスタ設定', href: '/setting/info', icon: <HomeIcon fontSize="small" /> },
        { label: '基本情報', href: '#', icon: <WysiwygIcon fontSize="small" /> },
      ],
      '/infostaff': [
        { label: 'マスタ設定', href: '/infostaff', icon: <HomeIcon fontSize="small" /> },
      ],
      '/infostaff/infostaffadd': [
        { label: 'マスタ設定', href: '/infostaff', icon: <HomeIcon fontSize="small" /> },
        { label: '役員情報', href: '#', icon: <WysiwygIcon fontSize="small" /> },
      ],
      '/': [{ label: 'ホーム', href: '/dashboard', icon: <HomeIcon fontSize="small" /> }],
    };

    return breadcrumbMap[location.pathname] || [{ label: 'ホーム', href: '/dashboard', icon: <HomeIcon fontSize="small" /> }];
  }, [location.pathname]);

  return (
    <>
     
      <Box sx={{ flexGrow: 1 }}>
        <div className='flex-1  md:ml-72 mt-5 mb-5' >
          <CustomizedBreadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        <main className={`flex-1 overflow-y-auto p-4 bg-slate-50 md:ml-72 mt-2 md:mr-2 mb-2 min-h-screen ${className}`}>
        {children}
      </main>
    </Box>
    
    </>
    
  );
}
