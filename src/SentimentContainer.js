import React from 'react';
import {Line} from 'react-chartjs-2';

class JournalEntry extends React.Component {

  state = {
    journal_data: {}
  }

  componentDidMount() {
    fetch(`http://localhost:3000/journal_entry_score_dates/1`)
    .then(resp=>resp.json())
    .then(data=>this.setState({journal_data: data}))
  }

  getDates = () => {
    let datesArray = []
    for (let x = 30; x >= 0 ; x--) {
      let date = new Date(); 
      date.setDate(date.getDate() - x);
      let month = date.getMonth() + 1;
      let day = date.getDate()
      datesArray.push(`${month}-${day}`)
    }
    return datesArray
  }

  render() {  
    // const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    const data = {
      labels: this.getDates(), 
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            display: true,
            labelString: 'Sentiment Score'
          }]
        }
      },
      datasets: [
        {
          label: 'sentiment',
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
          data: [{
            t: new Date("2015-3-15 13:3").toLocaleString(),
            y: 1
          }, {
            t: new Date("2015-3-25 13:2").toLocaleString(),
            y: 10
          }, {
            t: new Date("2015-4-25 14:12").toLocaleString(),
            y: 54
          }
        ]
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
  