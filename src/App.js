// src/App.js
import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import LocationCard from './components/LocationCard';
import { ForecastProvider } from './context/ForecastContext';


const App = () => {
  return (
    <WeatherProvider>
      <ForecastProvider>
        <div className="App">
          <div className={`py-4`}>
            <LocationCard />
          </div>
        </div>
      </ForecastProvider>
    </WeatherProvider>
  );
};

export default App;
