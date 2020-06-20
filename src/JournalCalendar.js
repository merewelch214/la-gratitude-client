import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import moment from 'moment';

class JournalCalendar extends React.Component {
    
    state = {
        date: new Date(),
        journal_dates: [],
        user_id: 1,
        loaded: false
    }

    // Get an array of days that had a journal entry using async await so that calendar tiles are updated with correct className
    async componentDidMount() {
        const response = await fetch(`http://localhost:3000/get_journal_dates/${this.state.user_id}`);
        const result = await response.json();
        result.map(record=>this.setState({ journal_dates: [...this.state.journal_dates, new Date(record.split('T')[0]).toDateString()] }) ) 
        this.setState({ loaded: true })

    }

    // send fetch request to get info for the selected day's journal entry and show that journal entry. Add button to see all entries. 
    onChange = (date) => {
        this.setState({ date })
        const formatted_date = date.toISOString().slice(0,10)
        fetch(`http://localhost:3000/user/${this.state.user_id}/journal_date/${formatted_date}`)
        .then(resp=>resp.json()
        .then(data=>console.log(data)))
    }
    
    // set the class name for all tiles. if there is a journal entry for that day, make link active. otherwise, disable click
    tileHandler = ({ date, view }) => view === 'month' && this.state.journal_dates.includes(date.toDateString()) ? 'active' : 'disabled'

    render() {
        if (!this.state.loaded) {
            return <div />;
        }
        return ( 
            <React.Fragment>
            <h1 className="title"> Calendar </h1>
                <div className="container columns">
                    <Calendar
                        maxDate={new Date()}
                        minDate={null}
                        tileClassName={this.tileHandler}
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
  