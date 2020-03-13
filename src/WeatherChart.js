import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";

class WeatherChart extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <ReactEcharts
                option={{
                    xAxis: {
                        type: "category",
                        data: this.props.dateArr
                    },
                    yAxis: {
                        type: "value"
                    },
                    series: [{
                        data: this.props.weatherData,
                        type: "line"
                    }]
                }}
            />
        );
    }
}

export default WeatherChart;