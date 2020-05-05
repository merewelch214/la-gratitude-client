import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class JournalCalendar extends React.Component {
    
    state = {
        date: new Date(),
        journal_dates: []
      }

    // To Do: Get an array of days that had a journal entry.
    // componentDidMount() {
    //     fetch(`http://localhost:3000/`)
    //      .then(resp=>resp.json())
    //      .then(data=>this.setState(journal_dates: data))
    // }
    
    onChange = date => this.setState({ date })

    render() {
        return (
            <React.Fragment>
            <h1 className="title"> Calendar </h1>
                <div className="container columns">
                    <Calendar
                        maxDate={this.state.date}
                        minData={null} //set this to the first month a user has journalled
                        tileContent={null} // use this prop to change the styling of tile if the date is in state.
                        calendarType='US'
                        onChange={this.onChange}
                        value={this.state.date}/>    
                    <div className='streak'> Your current streak is <b>0</b> days </div>
                    <div className='streak'> Your longest journaling streak was <b>X</b> days </div>
                </div>
            </React.Fragment>
        );
    }
  }
  
  export default JournalCalendar;
  