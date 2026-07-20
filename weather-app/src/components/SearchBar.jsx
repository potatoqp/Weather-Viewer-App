import { useState } from "react";


function SearchBar({ city, setCity, getWeather }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;