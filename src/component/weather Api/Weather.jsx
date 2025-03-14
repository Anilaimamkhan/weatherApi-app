

// import axios from 'axios';
// import React, { useState } from 'react';
// import { FaSearch } from "react-icons/fa";


// let apiKeys = import.meta.env.VITE_PASSWORD;

// const Weather = () => {
//     const [weather, setWeather] = useState(""); // Input field value
//     const [weatherData, setWeatherData] = useState(null); // API se aane wala data
//     const [error, setError] = useState(""); // Error handle karne ke liye
//     const iconCode = weatherData?.weather[0]?.icon;
//     const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;



//     const handleSearch = async () => {
//         // if (weatherData !== iconUrl) {
//         //     setWeatherData(null)
//         //     setWeather("")
//         //     setError("city not found")

//         // }
//         if (!weather && weather.length <0) {
//             setError("Please enter city name");
//             setWeatherData(null); // Weather data ko empty kar diya
//             return; // Yahan return lagana tha!
//         } else if (weatherData !== iconUrl) {
//             setWeatherData(null)
//             setWeather("")
//             setError("city not found")
//         } else {
//             try {

//                 let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${apiKeys}&units=metric`);
//                 console.log(response.data)
//                 setWeatherData(response.data)
//                 setError("")
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         setWeather("")

//         // setError("")
//     }





//     return (
//         <>
//             <div className='flex items-center flex-col p-4 bg-gray-900 max-w-90 h-96 text-white'>
//                 <h2 className='text-3xl mb-4'>Weather App</h2>

//                 {/* Input Field */}
//                 <div className="container">
//                     <div className="input flex justify-between items-center p-4 mb-4">
//                         <input
//                             type="search"
//                             placeholder='Enter city name...'
//                             className='outline-none border-b-2 border-white pb-2 bg-transparent text-white'
//                             value={weather}
//                             onChange={(e) => setWeather(e.target.value)}
//                         />
//                         <FaSearch className='cursor-pointer' onClick={handleSearch} />
//                     </div>
//                 </div>

//                 {/* Error Message */}
//                 {error && <p className='text-red-500'>{error}</p>}

//                 {/* Weather Data */}
//                 {weatherData && (
//                     <div className='w-full flex flex-col space-y-4'>
//                         <div className='flex justify-center items-center flex-col'>
//                             {/* <FaCloudRain size={50} /> */}
//                             <img src={iconUrl} alt="Weather Icon" />
//                             <h1> {weatherData.name}</h1>
//                             <h2>{weatherData.weather[0].main}</h2>
//                         </div>

//                         <div className='flex justify-between items-center gap-4'>
//                             <div className='flex flex-col'>
//                                 <p >Temp: {weatherData.main.temp} </p>
//                                 <p >Humidity: {weatherData.main.humidity}</p>
//                             </div>
//                             <div>
//                                 <p>{weatherData.weather[0].icon}</p>
//                                 <p >Wind Speed: {weatherData.wind["speed"]}</p>

//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Weather;





// import axios from 'axios';
// import React, { useState } from 'react';
// import { FaSearch } from "react-icons/fa";
// import clear from "../../assets/clear.jpg"
// import dry from "../../assets/dry.jpg"
// import rain from "../../assets/rain.jpg"
// import haze from "../../assets/haze.jpg"



// let apiKeys = import.meta.env.VITE_PASSWORD;

// const Weather = () => {
//     const [weather, setWeather] = useState(""); // Input field value
//     const [weatherData, setWeatherData] = useState(null); // API se aane wala data
//     const [error, setError] = useState(""); // Error handle karne ke liye
//     // const iconCode = weatherData?.weather[0]?.icon;
//     // const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

//     const handleSearch = async () => {
//         if (!weather) {
//             setError("Please enter city name");
//             setWeatherData(null); // Weather data ko empty kar diya
//             return; // Yahan return lagana tha!
//         }
//         try {

//             let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${apiKeys}&units=metric`);
//             console.log(response.data)
//             setWeatherData(response.data)
//         } catch (error) {
//             console.log(error)
//         }
//         setWeather("")
//         setError("")
//     }

//     return (
//         <>
//             <div className='flex items-center flex-col p-4 bg-gray-900 max-w-90 h-auto text-white'>
//                 <h2 className='text-3xl mb-4'>Weather App</h2>

//                 {/* Input Field */}
//                 <div className="container">
//                     <div className="input flex justify-between items-center p-4 mb-4">
//                         <input
//                             type="search"
//                             placeholder='Enter city name...'
//                             className='outline-none border-b-2 border-white pb-2 bg-transparent text-white'
//                             value={weather}
//                             onChange={(e) => setWeather(e.target.value)}
//                         />
//                         <FaSearch className='cursor-pointer' onClick={handleSearch} />
//                     </div>
//                 </div>

//                 {/* Error Message */}
//                 {error && <p className='text-red-500'>{error}</p>}

//                 {/* Weather Data */}
//                 {weatherData && (
//                     <div className='w-full flex flex-col space-y-4'>
//                         <div className='flex justify-center items-center flex-col'>

//                             {weatherData && (
//                                 <img className=' h-[200px]'
//                                     src={
//                                         weatherData.weather[0].main === "Clear"
//                                             ? clear
//                                             : weatherData.weather[0].main === "Rain"
//                                                 ? rain
//                                                 : weatherData.weather[0].main === "Haze"
//                                                     ? haze
//                                                     : dry
//                                     }
//                                     alt="Weather Image"
//                                 />
//                             )}
//                             <h1> {weatherData.name}</h1>
//                             <h2>{weatherData.weather[0].main}</h2>
//                         </div>

//                         <div className='flex justify-between items-center gap-4'>
//                             <div className='flex flex-col'>
//                                 <p >Temp: {weatherData.main.temp} </p>
//                                 <p >Humidity: {weatherData.main.humidity}</p>
//                             </div>
//                             <div>
//                                 <p>{weatherData.weather[0].icon}</p>
//                                 <p >Wind Speed: {weatherData.wind["speed"]}</p>

//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Weather;




import axios from 'axios';
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

let apiKeys = import.meta.env.VITE_PASSWORD;

const Weather = () => {
    const [weather, setWeather] = useState(""); // Input field value
    const [weatherData, setWeatherData] = useState(null); // API se aane wala data
    const [error, setError] = useState(""); // Error handle karne ke liye

    const handleSearch = async () => {
        if (!weather.trim()) {
            setError("Please enter city name"); // Input field empty
            setWeatherData(null);
            return;
        }

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${apiKeys}&units=metric`);
            setWeatherData(response.data);
            // console.log(response.data)
            setError(""); // Error ko khatam kiya
        } catch (error) {
            setWeatherData(null);
            setError("City not found or invalid city name"); // Galat city error
            console.log(error)
        }

        setWeather(""); // Input field ko empty kar diya
    }

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
                        />
                        <FaSearch className='cursor-pointer' onClick={handleSearch} />
                    </div>
                </div>

                {/* Error Message */}
                {error && <p className='text-red-500'>{error}</p>}

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
                                <p>Wind: {weatherData.wind.speed} m/s</p>
                                <p>Wind: {weatherData.weather[0].description} m/s</p>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Weather;
