import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    return (
        <>
            <h1>Weather App</h1>

            <SearchBar
                city={city}
                setCity={setCity}
            />

        </>
    )

}

export default App
