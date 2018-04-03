import React, { Component } from 'react';
import * as _ from 'underscore';
import { Subject } from 'rxjs/Subject';
import CalendarCell from '../CalendarCell/CalendarCell';
import './Calendar.css';

class Calendar extends Component {
  constructor() {
    super();
    this.search$ = new Subject();

    const DAYS = _.range(1, 32).map((day) => `Oct ${day}`);
    this.days = DAYS;
    this.hours = _.range(24);
    this.state = {
      isLoaded: false
    }
  }

  render() {
    return (
      <div className="calendar">

        {this.state.isLoaded ? (
          <div>
            <button className="btn" onClick={this.searchAll.bind(this)}>Search Whole Month</button>
            <table>
              <tr>
                {this.days.map((day) => <th className="day-header">{day}</th>)}
              </tr>
              {
                this.hours.map((hour) => 
                <tr>
                  {
                    this.days.map((day) => 
                      <td className="hour-cell">
                        <CalendarCell search={this.search$} hour={hour}></CalendarCell>
                      </td>
                  )}
                </tr>
              )}
            </table>
          </div>
        ) : (<button className="btn" onClick={this.load.bind(this)}>Load</button>)}
      </div>
    )
  }

  load() {
    this.setState({ isLoaded: true });
  }

  searchAll() {
    this.search$.next();
  }
}

export default Calendar;