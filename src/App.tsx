import * as React from "react";
import { extend } from '@syncfusion/ej2-base';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Inject, DragAndDrop, Resize, ViewsDirective, ViewDirective
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from './datasource';

/** import styles section */
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-schedule/styles/material.css";
import "./App.css";

function App() {
  let data: Object[] = extend([], (scheduleData as any), true) as Object[];
  const header: string | any = (args: { [key: string]: Object }) => {
    return (<div>
      {args.elementType === 'cell' ?
        <div className="e-cell-header">
          <div className="e-header-icon-wrapper">
            <button className="e-close" title="Close"></button>
          </div>
        </div> :
        <div className="e-event-header">
          <div className="e-header-icon-wrapper">
            <button className="e-close" title="CLOSE"></button>
          </div>
        </div>}
    </div>);
  }

  const content: string | any = (props: { [key: string]: Object }) => {
    return (<div>
      {props.elementType === 'cell' ?
        <div className="e-cell-content e-template">
          <form className="e-schedule-form">
            <div>
              <input className="subject e-field" type="text" name="Subject" placeholder="Title" />
            </div>
            <div>
              <input className="location e-field" type="text" name="Location" placeholder="Location" />
            </div>
          </form>
        </div> :
        <div className="e-event-content e-template">
          <div className="e-subject-wrap">
            {(props.Subject !== undefined) ?
              <div className="subject">{props.Subject}</div> : ""}
            {(props.Location !== undefined) ?
              <div className="location">{props.Location}</div> : ""}
            {(props.Description !== undefined) ?
              <div className="description">{props.Description}</div> : ""}
          </div>
        </div>}
    </div>);
  }
  const footer: string | any = (props: { [key: string]: Object }) => {
    return (<div>
      {props.elementType === 'cell' ?
        <div className="e-cell-footer">
          <button className="e-event-details" title="Extra Details">Extra Details</button>
          <button className="e-event-create" title="Add">Add</button>
        </div>
        :
        <div className="e-event-footer">
          <button className="e-event-edit" title="Edit">Edit</button>
          <button className="e-event-delete" title="Delete">Delete</button>
        </div>}
    </div>);
  }

  return (
    <ScheduleComponent id="schedule" selectedDate={new Date(2018, 3, 1)} quickInfoTemplates={{ header: header, content: content, footer: footer }} eventSettings={{ dataSource: data, enableTooltip: true }}>
      <ViewsDirective>
        <ViewDirective option='Day' />
        <ViewDirective option='Week' />
        <ViewDirective option='WorkWeek' />
        <ViewDirective option='Month' />
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month, DragAndDrop, Resize]} />
    </ScheduleComponent>
  );
}

export default App;