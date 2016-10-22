import React from 'react';

export default class Weather extends React.Component {

  constructor() {
    super();
    this.state = {weather: {}};
  }

  componentDidMount(){

    navigator.geolocation.getCurrentPosition( (position)=> {
      console.log(position);
      let location = {lat:position.coords.latitude, lon: position.coords.longitude};
      this.getWeather(location);
    });
  }

  getWeather(location) {
    let that = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      // Action to be performed when the document is read;
      console.log(JSON.parse(this.responseText));
      that.setState( { weather: JSON.parse(this.responseText)}, () => console.log(this.state) );
   }
 };
    xhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&APPID=43042276e8dc64c3f44ba821c2526939`);
    xhttp.send();
}
  render () {
    if (Object.keys(this.state.weather).length === 0) {
      return <div className="weather"></div>;
    } else {
      return <div className="weather">{this.state.weather.name}
        <br></br>
          {Math.floor((this.state.weather.main.temp-273)*100)/100} degrees</div>
      ;
    }
  }
}
