import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");

  function showWeather(response) {
    let city = response.data.name;
    let temp = Math.round(response.data.main.temp);
    alert(city + " " + temp + "ºC");
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "2b6fdad0cbd018949c50c70f72250726";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form className="Search" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          className="search-input"
          required
          onChange={handleInput}
        />
        <input type="submit" value="Search" className="search-btn" />
      </form>
    </div>
  );
}
