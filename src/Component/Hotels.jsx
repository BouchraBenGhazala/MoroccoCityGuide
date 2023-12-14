import React, { useEffect, useState } from 'react';
const Hotels=() => {
  const [CityHotels, setCityHotels] = useState([]);
  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/CityHotels')
      .then(response => response.json())
      .then(data => setCityHotels(data.CityHotels))  // Access the "stadium" array
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className='ContainerTraditions'>
      <h1>Hotels</h1>
      {CityHotels.map(hotel => (
          <span key={hotel.cityId}>
            {hotel.cityName}<br/>

          </span>
        ))} <br/>
                <style>
          {
            `
            .ContainerTraditions{
              padding-top: 150px;
            }
            `
          }
        </style>
    </div>
  );
}
export default Hotels;