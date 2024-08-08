import ContentMain from "../../content/Content";
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Grid, Button } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import RemoveIcon from '@mui/icons-material/Remove';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Employee {
  name: string;
  shifts: string[];
}

const daysInMonth = (month: number, year: number) => new Date(year, month, 0).getDate();
const monthNames = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

const ShiftForm: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { name: 'John Doe', shifts: Array(31).fill('') },
    { name: 'Jane Smith', shifts: Array(31).fill('') }
  ]);
  const [selectedAction, setSelectedAction] = useState<string>('');

  const handleShiftChange = (index: number, day: number, value: string) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].shifts[day] = value;
    setEmployees(updatedEmployees);
  };

  const handleCellClick = (index: number, day: number) => {
    if (selectedAction && day < daysInMonth(nextMonth + 1, nextMonthYear)) { // Check if the day is valid
      handleShiftChange(index, day, selectedAction);
    }
  };

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // Get current month (0-11)
  const currentYear = currentDate.getFullYear();
  const nextMonth = (currentMonth + 1) % 12; // Calculate next month (0-11)
  const nextMonthYear = nextMonth === 0 ? currentYear + 1 : currentYear; // Adjust year for next month
  const days = daysInMonth(nextMonth + 1, nextMonthYear); // Calculate days in next month (1-31)

  // Define colors for each action
  const actionColors: { [key: string]: string } = {
    '-': '#FFFFFF',
    '休': '#FFFFFF',
    '/公': '#FFC0CB',
    '/法': '#FFC0CB',
    '有': '#FFFFFF',
    '代': '#FFFFFF',
    '振': '#FFFFFF',
    '早出': '#ccffcc',
    '通常': '#FA8072',
    '通し': '#ffffcc',
    '特': '#FFFFFF',
  };

  return (
    <ContentMain className="flex flex-col min-h-screen">
      <Typography variant="h6" className='flex justify-start h-11 pt-2 pl-5' bgcolor={"#008bb5"} color={'white'} fontWeight={'bold'}>
        シフト管理
      </Typography>
      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={2.5} sm={3} md={3} lg={2} className="text-end">
          <Typography>
            固定値
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.2} className="text-end">
          <Button variant="outlined" size="small" sx={{ height: 30 }} onClick={() => setSelectedAction('-')}>
            <RemoveIcon />
          </Button>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.5} className="text-start" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '14px' }}>
            シフトなし
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1} className="text-start">
          <Button variant="outlined" size="small" sx={{ height: 30 }} onClick={() => setSelectedAction('休')}>
            休
          </Button>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.5} className="text-start" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '14px' }}>
            休みシフト
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1} className="text-start">
          <Button variant="outlined" size="small">
            <ReplyIcon />
          </Button>
        </Grid>
        <Grid item xs={3.5} sm={3} md={3} lg={1.5} className="text-start" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '14px' }}>
            編集前に戻す
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={3} sm={3} md={3} lg={2} className="text-end">
          <Typography>
            休日区分
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.2} className="text-end">
          <Button size="small" onClick={() => setSelectedAction('/公')}
            sx={{
              height: 30,
              backgroundColor: 'pink',
              color: 'black', // 色ของข้อความ
              border: '2px solid lightpink', // สีกรอบ
              '&:hover': {
                borderColor: 'lightpink', // สีกรอบเมื่อวางเมาส์อยู่บนปุ่ม
              },
            }}
          >
            /公
          </Button>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1} className="text-start">
          <Button size="small" onClick={() => setSelectedAction('/法')}
            sx={{
              height: 30,
              backgroundColor: 'pink',
              color: 'black', // 色ของข้อความ
              border: '2px solid lightpink', // สีกรอบ
              '&:hover': {
                borderColor: 'lightpink', // สีกรอบเมื่อวางเมาส์อยู่บนปุ่ม
              },
            }}
          >
            /法
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={3} sm={3} md={3} lg={2} className="text-end">
          <Typography>
            休暇パターン
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.2} className="text-end">
          <Button size="small" variant="outlined" onClick={() => setSelectedAction('有')}>
            有
          </Button>
        </Grid>
        <Grid item xs={2.7} sm={3} md={3} lg={0.9} className="text-start">
          <Button size="small" variant="outlined" onClick={() => setSelectedAction('代')}>
            代
          </Button>
        </Grid>
        <Grid item xs={2.7} sm={3} md={3} lg={0.9} className="text-start">
          <Button size="small" variant="outlined" onClick={() => setSelectedAction('振')}>
            振
          </Button>
        </Grid>
        <Grid item xs={2.7} sm={3} md={3} lg={0.9} className="text-start">
          <Button size="small" variant="outlined" onClick={() => setSelectedAction('特')}>
            特
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={3} sm={3} md={3} lg={2} className="text-end ">
          <Typography >
            フトパターン
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.2} className="text-end">
          <Button size="small" variant="contained" color="success" onClick={() => setSelectedAction('早出')}>
            早出
          </Button>
        </Grid>
        <Grid item xs={2.7} sm={3} md={3} lg={0.9} className="text-start">
          <Button size="small" variant="contained" color="error" onClick={() => setSelectedAction('通常')}>
            通常
          </Button>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={0.9} className="text-start">
          <Button size="small" variant="contained" color="warning" onClick={() => setSelectedAction('通し')}>
            通し
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={3} sm={3} md={3} lg={2} className="text-end ">
          <Typography >
            時刻指定
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.2} className="text-end">
          <Button variant="outlined" size="small" sx={{ height: 30 }}>
            <AccessTimeIcon />
          </Button>
        </Grid>
        <Grid item xs={5} sm={3} md={3} lg={1.5} className="text-start" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '14px' }}>
            時刻指定で入力
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={5} sm={3} md={3} lg={1.5} className="text-end" sx={{ marginTop: 1, marginRight: 1 }}>
        <Button size="small" variant="contained" color="success" >
        申請シフトを全て確定 
        </Button>
      </Grid>
      <TableContainer component={Paper} className="mt-2">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell 
                rowSpan={2 }  align="center"
                sx={{ border: '1px solid #ccc',
                      position: 'sticky', left: 0, 
                      background: '#fff', zIndex: 1 ,  
                      minWidth: { xs: 150, sm: 150, md: 150 } ,
                      fontSize: { xs: 12, sm: 12, md: 12, lg: 10 }
                   }}
              >
                 {`${nextMonthYear}年${monthNames[nextMonth]}月01日〜${days}日`}
              </TableCell>
              {Array.from({ length: days }, (_, i) => (
                <TableCell key={i + 1} align="center"  
                          sx={{ border: '1px solid #ccc' ,
                                minWidth: { xs: 53, sm: 53, md: 53 } , 
                                height: '30px', 
                                padding: '1px',
                                lineHeight: '12px', 
                                fontSize: { xs: 12, sm: 12, md: 12, lg: 12 }
                              }}
                >
                  {i + 1}
                </TableCell>
                
              ))}
            </TableRow>
            <TableRow>
              {Array.from({ length: days }, (_, i) => (
                <TableCell 
                  key={i + 1} 
                  align="center" 
                  sx={{ border: '1px solid #ccc' , 
                        fontSize: { xs: 12, sm: 12, md: 12, lg: 12 },
                        padding: '1px',
                        lineHeight: '12px', 
                        height: '20px' // Optional: Set a specific height
                     }}
                  
                  >
                  {dayNames[new Date(nextMonthYear, nextMonth, i + 1).getDay()]}
                </TableCell>
                
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={index}>
                <TableCell  
                    sx={{ border: '1px solid #ccc', 
                          position: 'sticky', left: 0, 
                          background: '#fff', zIndex: 1, 
                        
                        }}>
                  {employee.name}
                </TableCell>
                {employee.shifts.map((shift, day) => (
                  <TableCell
                    key={day}
                    align="center"
                    onClick={() => handleCellClick(index, day)}
                    sx={{
                      backgroundColor: day < daysInMonth(nextMonth + 1, nextMonthYear) ? actionColors[shift] || 'transparent' : '#f0f0f0', // Light gray for invalid days
                      cursor: day < daysInMonth(nextMonth + 1, nextMonthYear) ? 'pointer' : 'not-allowed', // Pointer cursor for valid days
                      opacity: day < daysInMonth(nextMonth + 1, nextMonthYear) ? 1 : 0.5, // Make invalid days appear faded
                      border: '1px solid #ccc',
                      fontSize: { xs: 12, sm: 12, md: 12, lg: 12 },
                      height: '50px', 
                      padding: '1px',
                      lineHeight: '12px', 
                    }}
                  >
                    {shift}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContentMain>
  );
};

export default ShiftForm;
