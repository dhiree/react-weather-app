import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Weather.css'

const Weather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=HmnXUMb6XiNG5uMcjtsschMdNodN3GsI'
                );
                const latestWeather = response.data.timelines.minutely[0].values;
                setWeather(latestWeather);
            } catch (error) {
                console.log('Failed to fetch weather data', error);
            }
        };

        fetchWeather();
    }, []);

    return (
        <div className="weather-widget">
            {weather ? (
                <div>
                    <h3 className='weather'>Current Weather</h3>
                    <p className="weather-info"><strong>Temperature:</strong> {weather.temperature}°C</p>
                    <p className="weather-info"><strong>Humidity:</strong> {weather.humidity}%</p>
                    <p className="weather-info"><strong>Visibility:</strong> {weather.visibility} km</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default Weather;
