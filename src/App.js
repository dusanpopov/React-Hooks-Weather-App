import React, {useState} from 'react';
import {API_DATA} from "./components/Apikey";
import './App.css';

const App = () => {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if(e.key === "Enter"){
      fetch(`${API_DATA.base}weather?q=${query}&units=metric&APPID=${API_DATA.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery("")})
    }
  }
  
  return (
    <div className="App">
      <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search" value={query} 
        onChange={e => setQuery(e.target.value)} 
        onKeyPress={search}/>
      </div>

      {(typeof weather.main != "undefined") ? (

      <div class="container-info">

          <div className="location-box">
            <h2 className="location">{weather.name}, {weather.sys.country}</h2>
          </div>

          <div className="weather-box">
            <p className="temp">
              {Math.round(weather.main.temp)}°c
            </p>
            <p className="weather">{weather.weather[0].main}</p>
          </div>

        </div>

        ) : ('')}
        
      </div>
    )
}

export default App;
