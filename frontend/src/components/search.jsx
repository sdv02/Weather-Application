import React, { useState } from 'react';
import axios from 'axios';

const SearchDetail = () => {
  const [cityName, setCityName] = useState('');
  
  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get('/api/weather', {
        params: { city: cityName },
      });

      // Handle the response data
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };

  return (
  


    <div>
      <input type="text" value={cityName} onChange={handleInputChange} />
      <button onClick={fetchWeatherData}>Get Weather</button>
    </div>
  );
};

export default SearchDetail;