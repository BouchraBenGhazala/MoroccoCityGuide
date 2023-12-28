import React, { useEffect, useState } from 'react';
import pageBG from "../Images/destination_slide.jpg";
import Footer from '../footer';

import Banding from '../banding';

const PopularPlaces = () => {
  const [popularPlaces, setPopularPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showMaps, setShowMaps] = useState(false); // Add this state


  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/PopularPlaces')
      .then(response => response.json())
      .then(data => setPopularPlaces(data.PopularPlaces))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleImageClick = (place) => {
    setSelectedPlace(place);
  };

  const closeCard = () => {
    setSelectedPlace(null);
  };

  return (
    <div className='ContainerPlaces'>
      <div className="homeContainer">
        <h1 className="text-center beautiful-title">Moroccan's Popular Places</h1>
        <style>
          {`
          .homeContainer {
            background-image: url(${pageBG});
            background-size: cover; 
            height:560px;
            filter: brightness(70%);
            opacity: 0.9;
          }
          .beautiful-title {
            font-family: 'Amiri', sans-serif;
            color: #991a2d;
            font-size: 2.5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 3px 3px 2px white;
            padding-top:250px;
          }
          `}
        </style>
      </div>
      <div className='text-center pb-5'>
        {popularPlaces.map(popularPlace => (
          <div key={popularPlace.city}>
            <h2 className='beautiful-subtitle pt-3'>{popularPlace.city}</h2>
            <div className='container places'>
              <div className='row'>
                {popularPlace.places.map(place => (
                  <div key={place.name} className='col-4'>
                    <img
                      src={place.image}
                      alt={place.name}
                      className='img-fluid mx-auto d-block'
                      style={{ maxWidth: '100%', height: '100%' }}
                      onClick={() => handleImageClick(place)}
                    />
                    <p style={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'center', color: 'white', padding: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>{place.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
      {/* Show container when a place is selected */}
      {selectedPlace && (
        <div className='container-overlay' onClick={closeCard}>
          <div className='container2'>
            <h3>{selectedPlace.name}</h3>
            <p>{selectedPlace.description}</p>
            {showMaps && (
          <div>
            {/* Add your Google Maps iframe code here */}
            <iframe
              title="Place Location"
              width="100%"
              height="300"
              margin-top="20px"
              style={{ border: 0 }}
              src={selectedPlace.frameSource}
              allowFullScreen
            ></iframe>
          </div>
        )}
        <button onClick={() => setShowMaps(!showMaps)} className='btn'>
          {showMaps ? 'Hide Maps' : 'Show Maps'}
        </button>
          </div>
        </div>
      )}
      <Footer />
      <style>
        {`
          .beautiful-subtitle {
            font-family: 'Amiri', sans-serif;
            color: #991a2d;
            font-size: 3rem;
            margin-bottom: 10px;
          }

          .ContainerPlaces {
            font-family: 'Amiri', sans-serif;
            background-color: #d9ac30;
          }

          .img-fluid {
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;
          }

          .img-fluid:hover {
            filter: brightness(80%);
          }

          .container-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            margin-top:40px;
          }

          .container2 {
            background-color: #d9ac30;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default PopularPlaces;
