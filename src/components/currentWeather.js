function CurrentWeather({ data }) {
  return (
    <div className="weather-card mt-3">
      <h2 className="text-primary">{data.name}</h2>

      <div className="d-flex gap-5">
        <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Condition: {data.weather[0].description}</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
