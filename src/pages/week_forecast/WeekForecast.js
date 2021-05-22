import React from 'react'
import WeatherMainIcon from '../../components/weather/WeatherMainIcon';
import WeatherMainWindow from '../../components/weather/WeatherMainWindow/WeatherMainWindow'

const week_forecast = (props) => {

    return (
        <div>
            <WeatherMainIcon weatherIconData={props.weatherData[0].description}/>
            <WeatherMainWindow weatherData={props.weatherData} />
        </div>
    )
}


export default week_forecast;
