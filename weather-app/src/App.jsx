import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    async function getWeather() {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;


    const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

    const data = await response.json();

    setWeather(data);

}

    return (
        <>
            <h1>Weather App</h1>

            <SearchBar
                city={city}
                setCity={setCity}
                getWeather={getWeather}
            />

            {weather && <WeatherCard weather={weather} />}

        </>
    );

}



export default App
