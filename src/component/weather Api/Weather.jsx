import axios from 'axios';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";


let apiKeys = import.meta.env.VITE_PASSWORD;
const Weather = () => {
    const [weather, setWeather] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // For loading state

    const handleSearch = async () => {
        if (!weather.trim()) {
            setError("Please enter city name");
            setWeatherData(null);
            return;
        }

        try {
            setLoading(true); // Show loading
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${apiKeys}&units=metric`);
            setWeatherData(response.data);
            setError("");
        } catch (error) {
            setWeatherData(null);
            setError("City not found or invalid city name");
            console.log(error)
        } finally {
            setLoading(false); // Hide loading
        }

        setWeather("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const iconCode = weatherData?.weather[0]?.icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return (
        <>
            <div className='flex items-center flex-col p-4 bg-gray-900 max-w-90 h-auto text-white shadow-lg'>
                <h2 className='text-3xl mb-4'>Weather App</h2>

                {/* Input Field */}
                <div className="container">
                    <div className="input flex justify-between items-center p-4 mb-4">
                        <input
                            type="search"
                            placeholder='Enter city name...'
                            className='outline-none border-b-2 border-white pb-2 bg-transparent text-white'
                            value={weather}
                            onChange={(e) => setWeather(e.target.value)}
                            onKeyDown={handleKeyPress} // Handle Enter key
                        />
                        <FaSearch className='cursor-pointer' onClick={handleSearch} />
                    </div>
                </div>

                {/* Error Message */}
                {error && <p className='text-red-500'>{error}</p>}

                {/* Loading */}
                {loading && <p>Loading...</p>}

                {/* Weather Data */}
                {weatherData && (
                    <div className='w-full flex flex-col space-y-4'>
                        <div className='flex justify-center items-center flex-col'>
                            <img src={iconUrl} alt="Weather Icon" />
                            <h1>{weatherData.name}</h1>
                            <h2>{weatherData.weather[0].main}</h2>
                        </div>

                        <div className='flex justify-between items-center gap-4'>
                            <div className='flex flex-col'>
                                <p>Temp: {weatherData.main.temp}°C</p>
                                <p>Humidity: {weatherData.main.humidity}%</p>
                            </div>
                            <div>
                                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                                <p>Description: {weatherData.weather[0].description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Weather;
