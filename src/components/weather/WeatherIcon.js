import { faBolt, faCloud, faCloudRain, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  return (
    <div>
      {props.weatherIconData === "Clouds" && (
        <FontAwesomeIcon icon={faCloud} size={props.size} />
      )}
      {props.weatherIconData === "Rain" && (
        <FontAwesomeIcon icon={faCloudRain} size={props.size} />
      )}
      {props.weatherIconData === "Clear" && (
        <FontAwesomeIcon icon={faSun} size={props.size} />
      )}
    </div>
  );
}
