import React from "react";
import WeatherIcon from "../WeatherIcon";

import "./WeatherDay.css";

export default function WeatherDay(props) {

  const day = props.weatherData.date.split(' ')[1];

  const data = props.weatherDataFull.list.filter((el) => {
    if (el.dt_txt.split(' ')[0].split('-')[2] === day) return true;
  });



  return (
    <div className="weather-day" onClick={props.handleRedirect('/day-forecast', data)}>
      <span>{props.weatherData.date}</span>
      <WeatherIcon weatherIconData={props.weatherData.description} size="5x" />
      <span>{props.weatherData.temp_min + '/' + props.weatherData.temp_max}</span>
    </div>
  );
}
