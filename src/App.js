import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/searchBar";
import CurrentWeather from "./components/currentWeather";
import Forecast from "./components/foreCast";
import "./App.css";

function App() {
  const [city, setCity] = useState("Lahore");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

const API_KEY = process.env.REACT_APP_WEATHER_KEY;


  const fetchWeather = async () => {
    try {
      setError("");

      const currentRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      setCurrent(currentRes.data);
      setForecast(forecastRes.data.list);
    } catch (err) {
      setError("City not found or API error!");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

   return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mt-5">
          <h1 className="fw-semibold">Weather App</h1>

          <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />

          {error && <p className="text-danger">{error}</p>}

          {current && <CurrentWeather data={current} />}

          {forecast.length > 0 && <Forecast data={forecast} />}
        </div>
      </div>
    </div>
  );
}

export default App;
