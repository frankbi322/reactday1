import React from 'react';


export default class Clock extends React.Component {
  constructor () {
    super();
    this.state = {time: new Date()};
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({time: new Date});
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <p className = "time"><span>Time:</span>{this.state.time.toLocaleTimeString()}</p>
        <br/>
        <p className = "time"><span>Date:</span>{this.state.time.toDateString()}</p>
    </div>);
  }
}
