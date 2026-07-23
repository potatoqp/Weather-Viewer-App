import SearchBar from "./components/SearchBar";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const weatherType = weather?.weather[0].main.toLowerCase();
    const backgroundClass = weatherType ? `bg-${weatherType}` : "bg-default";
    const [searchHistory, setSearchHistory] = useState([]);

   async function getWeather(searchCity = city) {

    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    setLoading(true);
    setError("");

    try {

        const response = await  fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        setWeather(data);

        setSearchHistory((prevHistory) => {

            const updatedHistory = [
                searchCity,
                ...prevHistory.filter(
                    (searchedCity) =>
                        searchedCity.toLowerCase() !== searchCity.toLowerCase()
                ),
            ];

         return updatedHistory.slice(0, 5);

        });

    } catch (err) {

        setWeather(null);
        setError(err.message);

    } finally {

        setLoading(false);

    }

}

    return (
        <div className = {`app ${backgroundClass}`}>
            <div className ="weather-container">
            <h1>Weather App</h1>

            <SearchBar
                city={city}
                setCity={setCity}
                getWeather={getWeather}
            />
            {searchHistory.length > 0 && (

    <div className="history">

        <h3>Recent Searches</h3>

        <div className="history-buttons">

            {searchHistory.map((searchedCity) => (

                <button
                    key={searchedCity}
                    onClick={() => getWeather(searchedCity)}
                >
                    {searchedCity}
                </button>

            ))}

        </div>

    </div>

)}

            {loading && <p className="loading">Loading...</p>}

            {error && <p className="error">{error}</p>}

            {weather && <WeatherCard weather={weather} />}

            </div>
        </div>
    );

}



export default App
