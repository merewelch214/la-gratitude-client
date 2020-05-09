import React from 'react';
import {Line} from 'react-chartjs-2';

class JournalEntry extends React.Component {

  state = {
    journal_data: {}
  }

  // componentDidMount() {
  //   fetch(`http://localhost:3000/journal_entry_score_dates`)
  //   .then(resp=>resp.json())
  //   .then(data=> console.log(data))
  // }

  render() {  
    const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    const data = {
      labels: ['Apr 1', 'Apr 8', 'Apr 14', 'Apr 21', 'Apr 28', 'May 5', 'May 13', ],
      datasets: [
        {
          label: 'Sentiment over time',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
    
    return (
          <div>
            <h1 className="title">Your sentiment over time</h1>
              <div className="container">
                < Line data={data}/>
              </div>
          </div> 
      );
    }
  }
  
  export default JournalEntry;
  