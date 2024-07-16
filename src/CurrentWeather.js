import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="city-weather-details">
        <h1>Lisbon</h1>
        <p>
          Tuesday 17:50, clear sky <br />
          Humidity: <span className="humidity">56%</span>, Wind: <span className="wind">10.29km/h</span>
        </p>
      </div>
      <div className="current-temperature">
        <div className="city-temperature-icon">☀️</div>
        <div className="city-temperature-degrees">24</div>
        <div className="city-temperature-unit">ºC</div>
      </div>
    </div>
  );
}
