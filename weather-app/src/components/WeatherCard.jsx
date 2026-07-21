function WeatherCard({ weather }) {

    const icon = weather.weather[0].icon;

    const iconUrl =
        `https://openweathermap.org/img/wn/${icon}@4x.png`;

    return (

        <div className="weather-card">

            <h2>
                {weather.name}, {weather.sys.country}
            </h2>

            <img
                src={iconUrl}
                alt="Weather Icon"
            />

            <h3>
                {Math.round(weather.main.temp)}°C
            </h3>

            <p>
                {weather.weather[0].description}
            </p>

            <div className="weather-info">

                <div>

                    Humidity💧

                    <p>{weather.main.humidity}%</p>

                </div>

                <div>

                    Wind Speed 🌬️

                    <p>{weather.wind.speed} m/s</p>

                </div>

            </div>

        </div>

    );

}

export default WeatherCard;