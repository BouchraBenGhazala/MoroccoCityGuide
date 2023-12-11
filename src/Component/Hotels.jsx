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
    <div>
      <h1 className='text-center'>Our Hotels</h1>
      <div className="background-div">
      <p className='ml-5 mr-5 text-center'>Welcome to our exclusive selection of hotels for the 2030 World Cup in Morocco, offering a diverse experience ranging from sophisticated five-star luxury to the welcoming warmth of three-star accommodations. Whether you choose the refined elegance of our five-star hotels, the perfect harmony of comfort and convenience in our four-star establishments, or the accessible charm of our three-star options, each property embodies a commitment to excellence, authenticity, and comfort. Elegant rooms, modern facilities, strategic proximity to World Cup venues, warm hospitality, and affordable rates ensure that your stay is an unforgettable experience. We look forward to welcoming you, making your World Cup stay as memorable as the action on the field.</p>
      </div>
      {CityHotels.map(CityHotels => (
          <div key={CityHotels.cityId} className='container ml-3 mr-3'>
            <h3><p className='mr-2'>City:<a href={`http://localhost:3000/stadiums/${CityHotels.cityId}`}><span className='text-muted font-weight-bold'>{CityHotels.cityName}</span></a> |</p></h3>
            {CityHotels.hotels.map((hotel, index) => (
              <div key={index}>
              <h5>{hotel.name}</h5>
              <p>Stars: <span className='text-muted font-weight-bold'>{hotel.stars}</span></p>
              <p>Address: <span className='text-muted font-weight-bold'>{hotel.address}</span></p>
              <p>Amenities: <span className='text-muted font-weight-bold'>{hotel.amenities.join(', ')}</span></p>
              <p>Average Price for 2 Persons: <span className='text-muted font-weight-bold'>{hotel.averagePriceFor2Persn}</span></p>
              <div>
                {hotel.photos.map((photo, photoIndex) => (
                  <img key={photoIndex} src={photo} alt={`Hotel ${hotel.name}`} style={{ maxWidth: '100px', width: 'auto', maxHeight: '100px', height: 'auto', margin: '5px' }} />
                ))}
              </div>
            </div>
          ))}
          

          </div>
        ))} <br/>
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