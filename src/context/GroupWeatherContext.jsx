// src/context/MexicoCitiesProvider.js
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

const MexicoCitiesContext = createContext();

const MexicoCitiesProvider = ({ children }) => {
  const [groupData, setGroupData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
      const apiEndpoint = 
      `https://api.openweathermap.org/data/2.5/group?id=3600382,3604614,3520914,3523272,3581164,3530582,3991328&appid=5bbb114d1dce1b4c1cd15936221ba47e&units=metric`;

      try {
        let response = await axios.get(apiEndpoint);
        setGroupData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [location]);

  return (
    <MexicoCitiesContext.Provider value={{ groupData, loading, error}}>
      {children}
    </MexicoCitiesContext.Provider>
  );
};

export { MexicoCitiesContext, MexicoCitiesProvider };
