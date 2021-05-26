import { useCallback, useEffect, useState } from "react";
import "./App.css";
import WeekForecast from "./pages/week_forecast/WeekForecast";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import DayForecast from "./pages/day_forecast/DayForecast";

function App() {
  const [city, setCity] = useState("belgrade");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDataFull, setWeatherDataFull] = useState([]);

  const history = useHistory();

  const handleRedirect = useCallback((path, state) => {
    return () => {
      history.push(path, state);
    }
  }, [history])

  const cityChangeHandler = (e) => {
    setCity(e.target.options[e.target.options.selectedIndex].value);
  };

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

  useEffect(async () => {
    const weatherApiUrl =
      "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" +
      weatherApiKey;

    const response = await fetch(weatherApiUrl);
    const data = await response.json();

    console.log(data);

    setWeatherDataFull(data);

    const weather_days = [];

    var today = new Date();
    const day = parseInt(String(today.getDate()).padStart(2, "0"));
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    var time_str = "";

    if (today.getHours() < 11) {
      time_str = " 12:00:00";
    } else {
      time_str = " 21:00:00";
    }

    var day_arr = [];
    var day_itr = day;
    for (var i = 1; i <= 5; i++) {
      if (day_itr < 10) {
        day_arr.push("-0" + day_itr);
      } else {
        day_arr.push("-" + day_itr);
      }
      day_itr++;
    }

    var month_str = "";

    if (month < 10) {
      month_str = "-0" + month;
    } else {
      month_str = "-" + month;
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
        date: monthNames[today.getMonth()] + " " + (day + index),
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
        wind: item.wind.speed,
      };
      weather.push(weatherItem);
    });
    setWeatherData(weather);
  }, [city]);

  return (

    <Switch>
      <Route exact path="/">
        {weatherData.length !== 0 && (
          <WeekForecast
            weatherDataFull={weatherDataFull}
            weatherData={weatherData}
            cityChangeHandler={cityChangeHandler}
            handleRedirect={handleRedirect}
          />
        )}
      </Route>
      <Route path="/day-forecast">
        <DayForecast handleRedirect={handleRedirect} weatherData={weatherData} />
      </Route>



    </Switch>
  );
}

export default App;
