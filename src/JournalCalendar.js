import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import moment from 'moment';

class JournalCalendar extends React.Component {
    
    state = {
        date: new Date(),
        journal_dates: [],
        user_id: 1,
      }

    // Get an array of days that had a journal entry.
    componentDidMount() {
        fetch(`http://localhost:3000/get_journal_dates/${this.state.user_id}`)
         .then(resp=>resp.json())
         .then(data=>data.map(record=>this.setState({journal_dates: [...this.state.journal_dates, new Date(record.split('T')[0]).toDateString() ] } )) )
    }

    // send fetch request to get info for the selected day's journal entry
    onChange = (date) => {
        this.setState({ date })
        console.log(date)
        //fetch()
    }
    
    // set the class name for all tiles. if there is a journal entry for that day, make link active. otherwise, disable click
    tileClassName = ({ date, view }) => view === 'month' && this.state.journal_dates.includes(date.toDateString()) ? 'active' : 'disabled' 
   
    render() {
        return ( 
            <React.Fragment>
            <h1 className="title"> Calendar </h1>
                <div className="container columns">
                    <Calendar
                        maxDate={new Date()}
                        minDate={null}
                        tileClassName={this.tileClassName}
                        calendarType='US'
                        onChange={this.onChange}
                        value={this.state.date}/>    
                    <div className='streak'> Your current streak is <b>0</b> days </div>
                    <div className='streak'> Your longest streak was <b>X</b> days </div>
                </div>
            </React.Fragment>
        );
    }
  }
  
  export default JournalCalendar;
  