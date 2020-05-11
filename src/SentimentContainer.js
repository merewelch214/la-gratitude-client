import React from 'react';
import {Line} from 'react-chartjs-2';

class JournalEntry extends React.Component {

  state = {
    journal_data: {},
    isLoaded: false
  }

  componentDidMount() {
    fetch(`http://localhost:3000/journal_entry_score_dates/1`)
    .then(resp=>resp.json())
    .then(data=>this.setState({journal_data: data, isLoaded: true}))
  }

  // get an array of dates to use as the labels for the x-axis.
  getDates = () => {
    let datesArray = [];
    for (let x = 30; x >= 0 ; x--) {
      let date = new Date(); 
      date.setDate(date.getDate() - x);
      let month = date.getMonth() + 1;
      let day = date.getDate()
      datesArray.push(`${month}-${day}`)
    }
    return datesArray;
  }

  // format the journal entry score and date data for the chart, using the t (t for time, or the x) axis and y axis
  getData = (array) => {
    let final_array = []
    if (!!array) {
      for (let i = 0; i < array.length; i++) {
        let obj = {}; 
        let time = new Date(array[i][0])
        let month = time.getMonth()+1
        let day = time.getDate()
        obj['t'] = `${month}-${day}`;
        obj['y'] = array[i][1];
        final_array.push(obj);
      }
      console.log(final_array)
    return final_array;
    }
  }


  render() {  
    
    // data inputs for chart 
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
          data: this.state.isLoaded && this.getData(this.state.journal_data)
        }
      ]
    }
    
    return (
          <div>
            <h1 className="title">Your sentiment over time</h1>
              <div className="container">
                {this.state.isLoaded ? < Line data={data}/> : <div> Loading... </div>}
              </div>
          </div> 
      );
    }
  }
  
  export default JournalEntry;
  