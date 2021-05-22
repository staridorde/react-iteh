import { useEffect, useState } from "react";
import "./App.css";
import WeekForecast from "./pages/week_forecast/WeekForecast";
import getData from "./store/WeatherData";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const weatherApiKey = "e6c3074d36070f41e91b9440f056f5c8";
  const weatherApiUrl =
    "http://api.openweathermap.org/data/2.5/forecast?q=Belgrade&units=metric&appid=" +
    weatherApiKey;

  useEffect(async () => {
    const response = await fetch(weatherApiUrl);
    const data = await response.json();

    console.log(data);

    const weather_days = [];

    var today = new Date();
    const day = parseInt(String(today.getDate()).padStart(2, "0"));
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    var time_str = '';

    if(today.getHours() < 11) {
      time_str = ' 12:00:00';
    } else {
      time_str = ' 21:00:00';
    }


    var day_arr = [];
    var day_itr = day;
    for(var i = 1; i<=5; i++) {
      if(day_itr < 10) {
        day_arr.push('-0'+day_itr);
      } else {
        day_arr.push('-'+day_itr);
      }
      day_itr++;
    }

    var month_str = '';

    if( month < 10) {
      month_str = '-0'+month;
    } else {
      month_str = '-'+month;
    }

    weather_days.push(year + month_str + day_arr[0] + time_str);
    weather_days.push(year + month_str + day_arr[1] + time_str);
    weather_days.push(year + month_str + day_arr[2] + time_str);
    weather_days.push(year + month_str + day_arr[3] + time_str);
    weather_days.push(year + month_str + day_arr[4] + time_str);



    const final_weather_array = data.list.filter((element) => {
      // console.log(element.dt_txt);
      if (weather_days.indexOf(element.dt_txt) !== -1) {
        return true;
      } else return false;
    });

    let weather = [];
    final_weather_array.forEach((item, index) => {
      const weatherItem = {
        id: index,
        date: monthNames[today.getMonth()] + ' ' + (day + index),
        clouds: item.clouds.all,
        feels_like: Math.round(item.main.feels_like),
        grnd_level: item.main.grnd_level,
        humidity: item.main.humidity,
        pressure: item.main.pressure,
        sea_level: item.main.sea_level,
        temp: item.main.temp,
        temp_max: Math.ceil(item.main.temp_max),
        temp_min: Math.floor(item.main.temp_min),
        description: item.weather[0].main,
        wind: item.wind.speed
      };
      weather.push(weatherItem);
    });
    setWeatherData(weather);
  }, []);

  return (
    <div>
      {weatherData.length !== 0 && <WeekForecast weatherData={weatherData} />}
    </div>
  );
}

export default App;
