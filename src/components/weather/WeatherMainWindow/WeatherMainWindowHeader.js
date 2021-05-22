import React from "react";

import './WeatherMainWindowHeader.css';

export default function WeatherMainWindowHeader(props) {
  return (
    <div className="header">
      
      <div className="span-box span-box-date">
        <span>{props.weatherData.date}</span>
      </div>
      
      <div className="span-box">
        <span>High: {props.weatherData.temp_max}</span>

        <span>Low: {props.weatherData.temp_min}</span>
      </div>

      <div className="span-box">
        <span>Feels Like: {props.weatherData.feels_like}</span>

        <span>Humidity: {props.weatherData.humidity}%</span>

        <span>Wind: {props.weatherData.wind}m/s</span>
      </div>

      <div className="span-box">
        <span>Visibility: 10m</span>

        <span>Pressure: {props.weatherData.pressure}mb</span>
      </div>
    </div>
  );
}
