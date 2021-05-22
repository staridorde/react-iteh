import React from "react";

import { faCloud, faCloudRain, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WeatherMainIcon.css";

export default function WeatherMainIcon(props) {
  return (
    <div className="weather-icon">
      {props.weatherIconData === "Clouds" && <FontAwesomeIcon icon={faCloud} size="10x" />}
      {props.weatherIconData === "Rain" && <FontAwesomeIcon icon={faCloudRain} size="10x" />}
      {props.weatherIconData === "Clear" && <FontAwesomeIcon icon={faSun} size="10x" />}
    </div>
  );
}
