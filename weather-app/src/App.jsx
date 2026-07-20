import SearchBar from "./components/SearchBar";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

   async function getWeather() {

    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    setLoading(true);
    setError("");

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        setWeather(data);

    } catch (err) {

        setWeather(null);
        setError(err.message);

    } finally {

        setLoading(false);

    }

}

    return (
        <>
            <h1>Weather App</h1>

            <SearchBar
                city={city}
                setCity={setCity}
                getWeather={getWeather}
            />

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {weather && <WeatherCard weather={weather} />}

        </>
    );

}



export default App
