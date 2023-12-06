import React, { useEffect, useState } from 'react';

const StadiumList = () => {
  const [stadiums, setStadiums] = useState([]);
  const [historyCities, setHistoryCities] = useState([]);
  const [CitiesTraditionsCultures, setTraditionsCultures] = useState([]);
  const [popularPlaces, setpopularPlaces] = useState([]);
  const [CityHotels, setCityHotels] = useState([]);

  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/stadium')
      .then(response => response.json())
      .then(data => setStadiums(data.stadium))  // Access the "stadium" array
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/historyCities')
      .then(response => response.json())
      .then(data => setHistoryCities(data.historyCities))  // Access the "stadium" array
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/TraditionsCultures')
      .then(response => response.json())
      .then(data => setTraditionsCultures(data.CitiesTraditionsCultures))  // Access the "stadium" array
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/PopularPlaces')
      .then(response => response.json())
      .then(data => setpopularPlaces(data.PopularPlaces))  // Access the "stadium" array
      .catch(error => console.error('Error fetching data:', error));
  }, []);  
  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/CityHotels')
      .then(response => response.json())
      .then(data => setCityHotels(data.CityHotels))  // Access the "stadium" array
      .catch(error => console.error('Error fetching data:', error));
  }, []);  
  return (
    <div>
      <h1>Stadium List</h1>
        {stadiums.map(stadium => (
          <span key={stadium.id}>
            {stadium.name}<br/>
            <img src={stadium.image} alt={stadium.name} /><br/>
          </span>
        ))} <br/>
        {historyCities.map(historyCities => (
            <span key={historyCities.id}>
              <h3>{historyCities.cityName}</h3><br/>
              {historyCities.overview}<br/>
              {historyCities.climate}

            </span>
        ))}
          {/* Assuming your data structure is stored in a variable named CitiesTraditionsCultures */}
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

        {popularPlaces.map(popularPlace => (
          <div key={popularPlace.city}>
            <h2>{popularPlace.city}</h2>
            {popularPlace.places.map(place => (
              <div key={place.name}>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                {/* Additional information or components related to each place */}
                <img src={place.image} alt={place.name} width="500px"/>
                {/* Add more components or details as needed */}
              </div>
            ))}
            <br />
          </div>
        ))}
          {CityHotels.map(hotel => (
          <span key={hotel.cityId}>
            {hotel.cityName}<br/>

          </span>
        ))} <br/>

    </div>
  );
};
export default StadiumList;
