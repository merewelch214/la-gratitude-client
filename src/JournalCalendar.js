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

    // To Do: Get an array of days that had a journal entry.
    componentDidMount() {
        fetch(`http://localhost:3000/get_journal_dates/${this.state.user_id}`)
         .then(resp=>resp.json())
         .then(data=>data.map(record=>this.setState({journal_dates: [...this.state.journal_dates, record]})))
    }

    onChange = date => this.setState({ date })

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
            <h1 className="title"> Calendar </h1>
                <div className="container columns">
                    <Calendar
                        maxDate={this.state.date}
                        minData={null} //set this to the first month a user has journalled
                        tileContent={({ date, view }) => view === 'month' && this.state.journal_dates.includes(date) ? <p>*</p> : null} // use this prop to change the styling of tile if the date is in state.
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
  