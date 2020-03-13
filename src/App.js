import React, { Component } from "react";
import Request from "./Requests";
import WeatherChart from "./WeatherChart";

class App extends Component {

    constructor() {
        super();
        this.state = {
            weatherData: null
        };
    }

    componentDidMount() {
        Request.getWeather().then(data => {
            this.setState({weatherData: data})
        });
    }

    render() {
        if (this.state.weatherData){

            let dateArr = this.state.weatherData.map(data => new Date(data.date).toLocaleDateString());
            let tempArr =  this.state.weatherData.map(data => data.temp);
            let pressureArr = this.state.weatherData.map(data => data.pressure);
            let wetArr = this.state.weatherData.map(data => data.wet);

            return (
                <>
                    <WeatherChart dateArr={dateArr} weatherData={tempArr}/>
                    <WeatherChart dateArr={dateArr} weatherData={pressureArr}/>
                    <WeatherChart dateArr={dateArr} weatherData={wetArr}/>
                </>
            );
        }
            return null;
    }
}

export default App;