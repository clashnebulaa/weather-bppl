// src/context/ForecastContext.js
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

const ForecastContext = createContext();

const ForecastProvider = ({ children }) => {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  // Función para obtener la ubicación del usuario
  const getLocation = async () => {
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
    getLocation();
  }, []);

  const fetchData = async () => {
    if (location) {
      const { lat, lon } = location;
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=5bbb114d1dce1b4c1cd15936221ba47e&units=metric`);
        const data = await response.data.daily;
        setForecastData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <ForecastContext.Provider value={{ forecastData, loading, error }}>
      {children}
    </ForecastContext.Provider>
  );
};

export { ForecastContext, ForecastProvider };
