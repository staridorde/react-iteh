import React from 'react'
import WeatherMainWindowBody from './WeatherMainWindowBody'
import WeatherMainWindowHeader from './WeatherMainWindowHeader'

import './WeatherMainWidnow.css';

export default function WeatherMainWindow(props) {
    return (
        <div className="main-window">
            <WeatherMainWindowHeader weatherData={props.weatherData[0]} />
            <WeatherMainWindowBody weatherDataFull={props.weatherDataFull} handleRedirect={props.handleRedirect} weatherData={props.weatherData} />
        </div>
    )
}
