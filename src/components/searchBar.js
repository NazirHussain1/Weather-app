import React from "react";

function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="search mt-3">
      <input
  type="text"
  placeholder="Enter city name..."
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className=" rounded  p-1"
/>

      <button className="btn btn-primary ms-2 rounded" onClick={fetchWeather}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
