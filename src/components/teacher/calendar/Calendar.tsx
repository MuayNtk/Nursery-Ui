import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';


export default class Demo extends React.PureComponent {

  render() {

    return (
      <Paper>
        <Scheduler>
          <ViewState
            defaultCurrentDate="2024-06-18"
          />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
        </Scheduler>
      </Paper>
    );
  }
}
