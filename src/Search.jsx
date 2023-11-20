import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

export default function Search() {
  let [searchv, handleSearch] = useState("");
  let [weather, weatherObject] = useState("");

  function handleSearchS(event) {
    handleSearch(event.target.value);
  }
  function handleTemp(response) {
    console.log(response);
    let tempaerature = Math.round(response.data.main.temp);
    let humidity = response.data.main.humidity;
    let description = response.data.weather[0].description;
    let wind = response.data.wind.speed;
    let icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    console.log(response.data.weather[0].icon);
    console.log(description);
    weatherObject({ tempaerature, humidity, description, wind, icon });
    // return(

    // )
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchv}&appid=97c2f6a3b34509ac62090edc5d18d949&units=Metric`;
    axios.get(url).then(handleTemp);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" name={searchv} onChange={handleSearchS} />
        <input type="submit" value="Search" />
      </form>
      <ul>
        <li>Temperature: {weather.tempaerature}℃</li>
        <li>Humidity: {weather.humidity}%</li>
        <li>Description: {weather.description} </li>
        <li>Wind: {weather.wind}km/h</li>
        <li>
          Icon: <img src={weather.icon} alt={weather.description} />
        </li>
      </ul>
    </div>
  );
}