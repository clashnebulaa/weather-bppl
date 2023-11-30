// src/context/WeatherContext.js
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
    // eslint-disable-next-line
  const [cityName, setCityName] = useState(null)

  // Función para obtener la ubicación del usuario
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const FetchCityData = async (city) => {
    if(city){
      setCityName(city)
    }
  }



  useEffect(() => {
    getLocation()
  }, [])

  const fetchData = async (customCityName = null) => {
    if (location) {
    const { lat, lon } = location;
      try {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5bbb114d1dce1b4c1cd15936221ba47e&units=metric`);
        if(customCityName){
          response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${customCityName}&appid=5bbb114d1dce1b4c1cd15936221ba47e&units=metric`);
        }
        setWeatherData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    } 
  };

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [location])

  return (
    <WeatherContext.Provider value={{ weatherData, loading, error, FetchCityData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
