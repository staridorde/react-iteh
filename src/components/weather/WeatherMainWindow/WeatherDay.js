import React from "react";
import WeatherIcon from "../WeatherIcon";

import "./WeatherDay.css";

export default function WeatherDay(props) {
  return (
    <div className="weather-day">
      <span>{props.weatherData.date}</span>
      <WeatherIcon weatherIconData={props.weatherData.description} size="5x" />
      <span>{props.weatherData.temp_min + '/' + props.weatherData.temp_max}</span>
    </div>
  );
}
