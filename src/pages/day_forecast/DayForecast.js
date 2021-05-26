import React from 'react'
import { useHistory } from 'react-router';
import Button from '../../components/UI/Button';
import WeatherIcon from '../../components/weather/WeatherIcon';
import "./DayForecast.css";

export default function DayForecast(props) {
    const history = useHistory();
    console.log(history.location.state);
    return (
        <div className="list">
            {history.location.state.map((el, index) => {
                return (
                    <div key={index} className="list_el">
                        <WeatherIcon weatherIconData={el.weather[0].main} size="1x" />
                    
                        {el.dt_txt.split(' ')[1]}
                    </div>
                );
            })}

            <Button onClick={props.handleRedirect('/', {})}>Back</Button>
        </div>
    );
}
