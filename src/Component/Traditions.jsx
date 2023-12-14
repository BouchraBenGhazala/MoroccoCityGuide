import React, { useEffect, useState } from 'react';

const Traditions=() => {
  const [CitiesTraditionsCultures, setTraditionsCultures] = useState([]);
  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/TraditionsCultures')
      .then(response => response.json())
      .then(data => setTraditionsCultures(data.CitiesTraditionsCultures))  // Access the "stadium" array
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className='ContainerTraditions'>
      <h1>Traditions</h1>
      {CitiesTraditionsCultures.map(city => (
          <div key={city.id}>
            <h2>{city.name}</h2>

            {/* Accessing the traditions for the current city */}
            {Object.keys(city.traditions).map(traditionKey => (
              <div key={traditionKey}>
                <h3>{traditionKey}</h3>
                <ul>
                  {/* Iterating over the specific tradition array */}
                  {city.traditions[traditionKey].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Additional information or components related to the city */}
            <p>Language: {city.culture.language}</p>
            <p>Music: {city.culture.music}</p>
            {/* Add more components or details as needed */}
            <br />
          </div>
        ))}
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
export default Traditions;