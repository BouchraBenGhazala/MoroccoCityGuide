
import React, { useEffect, useState } from 'react';
const PopularPlaces=() => {
  const [popularPlaces, setpopularPlaces] = useState([]);
  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/PopularPlaces')
      .then(response => response.json())
      .then(data => setpopularPlaces(data.PopularPlaces))  // Access the "stadium" array
      .catch(error => console.error('Error fetching data:', error));
  }, []);  
  return (
    <div>
      <h1>Places</h1>
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
    </div>
  );
}
export default PopularPlaces;