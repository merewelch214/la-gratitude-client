import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class JournalCalendar extends React.Component {
    
    state = {
        date: new Date(),
      }

    onChange = date => this.setState({ date })

    render() {
        return (
            <React.Fragment>
            <h1 className="title"> April 2020 </h1>
                <div className="container">
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}/>
                </div>
            </React.Fragment>
        );
    }
  }
  
  export default JournalCalendar;
  