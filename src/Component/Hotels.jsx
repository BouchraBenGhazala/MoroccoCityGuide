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
    <div className='ContainerHotels'>
      <h1>Hotels</h1>
      {CityHotels.map(hotel => (
          <span key={hotel.cityId}>
            {hotel.cityName}<br/>

          </span>
        ))} <br/>
                <style>
          {
            `
            .ContainerHotels{
              padding-top: 150px;
            }
            `
          }
        </style>
    </div>
  );
}
export default Hotels;
/* +++ 
                <h3 className='font-weight-bold mb-4'>{CityHotels.hotels[0].name}</h3><br/><br />
                <div className="d-flex mb-2">
                  <p className='mr-2'>City:<a href={`http://localhost:3000/stadiums/${CityHotels.cityId}`}><span className='text-muted font-weight-bold'>{CityHotels.cityName}</span></a> |</p>
                  <p className='mr-2'>address: <span className='text-muted font-weight-bold'>{CityHotels.hotels[0].address}</span>  |</p>
                  
                  <p>averagePriceFor2Persn: <span className='text-muted font-weight-bold'>{CityHotels.hotels[0].averagePriceFor2Persn}</span></p>
                </div>
                <a href={`http://localhost:3000/stadiums/${CityHotels.cityId}`}>
                <img src={CityHotels.hotels[0].photos} alt={CityHotels.hotels[0].name} width="800" height="400" className="img-fluid mb-5 rounded"/>    
                </a>*/