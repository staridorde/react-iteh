import React from 'react'
import WeatherMainIcon from '../../components/weather/WeatherMainIcon';
import WeatherMainWindow from '../../components/weather/WeatherMainWindow/WeatherMainWindow'

const week_forecast = (props) => {

    return (
        <div>
            <WeatherMainIcon weatherData={props.weatherData[0]} cityChangeHandler={props.cityChangeHandler} />
            <WeatherMainWindow weatherData={props.weatherData} />
        </div>
    )
}


export default week_forecast;
