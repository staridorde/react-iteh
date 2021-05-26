import React from "react";
import WeatherDay from "./WeatherDay";
import "./WeatherMainWindowBody.css";

export default function WeatherMainWindowBody(props) {
  return (
    <div className="weather-body">
        <WeatherDay weatherDataFull={props.weatherDataFull} handleRedirect={props.handleRedirect} weatherData={props.weatherData[0]} />
        <WeatherDay weatherDataFull={props.weatherDataFull} handleRedirect={props.handleRedirect} weatherData={props.weatherData[1]} />
        <WeatherDay weatherDataFull={props.weatherDataFull} handleRedirect={props.handleRedirect} weatherData={props.weatherData[2]} />
        <WeatherDay weatherDataFull={props.weatherDataFull} handleRedirect={props.handleRedirect} weatherData={props.weatherData[3]} />
        <WeatherDay weatherDataFull={props.weatherDataFull} handleRedirect={props.handleRedirect} weatherData={props.weatherData[4]} />
    </div>
  );
}
