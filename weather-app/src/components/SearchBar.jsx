import { useState } from "react";


function SearchBar({ city, setCity, getWeather, setError }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          setError("");
        }}
      />

      <button onClick={() => getWeather(city)}>
        Search
      </button>
    </div>
  );
}


export default SearchBar;