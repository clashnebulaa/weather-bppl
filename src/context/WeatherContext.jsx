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
    const [dynamicRoute, setDynamicRoute] = useState(''); // Nueva propiedad para la ruta dinámica

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

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [dynamicRoute])


  useEffect(() => {
    getLocation()
  }, [])

  const fetchData = async () => {
    if (location) {
    const { lat, lon } = location;
    const apiEndpoint = dynamicRoute ? dynamicRoute : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;

      try {
        let response = await axios.get(`${apiEndpoint}&appid=5bbb114d1dce1b4c1cd15936221ba47e&units=metric`);
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
    <WeatherContext.Provider value={{ weatherData, loading, error, setDynamicRoute, dynamicRoute }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
