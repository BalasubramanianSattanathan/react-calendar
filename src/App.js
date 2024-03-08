import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject
} from '@syncfusion/ej2-react-schedule';
import './App.css';

const App = () => {
  const data = [{
    Id: 1,
    Subject: 'Interview',
    StartTime: new Date(2023, 1, 15, 10, 0),
    EndTime: new Date(2023, 1, 15, 12, 30),
  }];
  const eventSettings = { dataSource: data }

  return <ScheduleComponent height='550px' showHeaderBar={true} selectedDate={new Date(2023, 1, 15)} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>;
};
export default App;
createRoot(document.getElementById('schedule')).render(<App />);