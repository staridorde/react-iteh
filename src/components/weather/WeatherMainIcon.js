import React from "react";

import { faCloud, faCloudRain, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WeatherMainIcon.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherMainIcon(props) {
  return (
    <div className="weather-icon">
      <div className="select-city-div">
        <select name="cities" className="select-city-dropdown" onChange={props.cityChangeHandler}>
          <option value="belgrade">Belgrade</option>
          <option value="zagreb">Zagreb</option>
          <option value="rome">Rome</option>
          <option value="london">London</option>
        </select>
      </div>
      <WeatherIcon weatherIconData={props.weatherData.description} size="10x" />
{/* 
      {props.weatherIconData === "Clouds" && (
        <FontAwesomeIcon icon={faCloud} size="10x" />
      )}
      {props.weatherIconData === "Rain" && (
        <FontAwesomeIcon icon={faCloudRain} size="10x" />
      )}
      {props.weatherIconData === "Clear" && (
        <FontAwesomeIcon icon={faSun} size="10x" />
      )} */}
    </div>
  );
}
