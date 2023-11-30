// src/App.js
import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import LocationCard from './components/LocationCard';
import { ForecastProvider } from './context/ForecastContext';
import { MexicoCitiesProvider } from './context/GroupWeatherContext';


const App = () => {
  return (
    <WeatherProvider>
      <ForecastProvider>
        <MexicoCitiesProvider>
        <div className="App">
          <div className={`py-4`}>
            <LocationCard />
          </div>
        </div>
        </MexicoCitiesProvider>
      </ForecastProvider>
    </WeatherProvider>
  );
};

export default App;
