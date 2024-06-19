import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Resources,
  MonthView,
  Toolbar,
  DateNavigator,
  TodayButton,
  Appointments,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const PREFIX = "Demo";

interface Resource {
  fieldName: string;
  title: string;
  instances: { id: string | number; text: string }[];
  allowMultiple?: boolean; // Optional property for resources with multiple selections
}

interface Appointment {
  title: string;
  startDate: Date;
  endDate: Date;
  id: number;
  members?: number[];
  location?: string;
}

const classes = {
  container: `${PREFIX}-container`,
  text: `${PREFIX}-text`,
};

const StyledDiv = styled("div")(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: "flex",
    marginBottom: theme.spacing(2),
    justifyContent: "flex-end",
  },
  [`& .${classes.text}`]: {
    ...theme.typography.h6,
    marginRight: theme.spacing(2),
  },
}));

const appointments: Appointment[] = [
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2024, 5, 19, 12, 35),
    endDate: new Date(2024, 5, 19, 15, 0),
    id: 2,
    members: [3],
    location: "Room 3",
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2024, 5, 28, 12, 35),
    endDate: new Date(2024, 5, 28, 15, 0),
    id: 3,
    members: [4, 1],
    location: "Room 4",
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2024, 5, 29, 12, 35),
    endDate: new Date(2024, 5, 29, 15, 0),
    id: 4,
    members: [5, 1, 3],
    location: "Room 5",
  },
];

const ResourceSwitcher = ({
  mainResourceName,
  onChange,
  resources,
}: {
  mainResourceName: string;
  onChange: (value: string) => void;
  resources: Resource[];
}) => (
  <StyledDiv className={classes.container}>
    <div className={classes.text}>
      <p className="text-black">Main resource name : </p>
      </div>
    <Select
      variant="standard"
      value={mainResourceName}
      onChange={(e) => onChange(e.target.value)}
    >
      {resources.map((resource) => (
        <MenuItem key={resource.fieldName} value={resource.fieldName}>
          {resource.title}
        </MenuItem>
      ))}
    </Select>
  </StyledDiv>
);

export default class Demo extends React.PureComponent {
  constructor(props: any) {
    super(props);
    this.state = {
      data: appointments,
      mainResourceName: "members",
      resources: [
        {
          fieldName: "location",
          title: "Location",
          instances: [
            { id: "Room 1", text: "Room 1" },
            { id: "Room 2", text: "Room 2" },
            { id: "Room 3", text: "Room 3" },
            { id: "Room 4", text: "Room 4" },
            { id: "Room 5", text: "Room 5" },
          ],
        },
        {
          fieldName: "members",
          title: "Members",
          allowMultiple: true,
          instances: [
            { id: 1, text: "Andrew Glover" },
            { id: 2, text: "Arnie Schwartz" },
            { id: 3, text: "John Heart" },
            { id: 4, text: "Taylor Riley" },
            { id: 5, text: "Brad Farkus" },
          ],
        },
      ],
    };

    this.changeMainResource = this.changeMainResource.bind(this);
  }

  changeMainResource(mainResourceName: string) {
    this.setState({ mainResourceName });
  }

  render() {
    const { data, resources, mainResourceName } = this.state as {
      data: Appointment[];
      resources: Resource[];
      mainResourceName: string;
    };

    return (
      <>
        <ResourceSwitcher
          resources={resources}
          mainResourceName={mainResourceName}
          onChange={this.changeMainResource}
        />
        <Paper>
          <Scheduler data={data}>
            <ViewState defaultCurrentDate="2024-06-19" />
            <MonthView />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments />
            <AppointmentTooltip />
            <Resources data={resources} mainResourceName={mainResourceName} />
          </Scheduler>
        </Paper>
      </>
    );
  }
}


