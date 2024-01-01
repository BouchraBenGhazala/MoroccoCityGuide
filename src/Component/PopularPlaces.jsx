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
      <div
          className="background-image"
          style={{
            backgroundImage: `url(${pageBG})`,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="overlay"></div>
          <h1 className="text-center beautiful-Title">
          Visit Moroccan's Popular Places
          </h1>
        </div>
        <style>
          {`
          .homeContainer {
            text-align: center;
            position: relative;
          }
          .beautiful-title {
            font-family: 'Amiri', sans-serif;
            color: #991a2d; /* Your preferred text color */
            font-size: 2.5rem; /* Adjust the font size as needed */
            text-transform: uppercase;
            letter-spacing: 2px; /* Adjust the letter spacing as needed */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle text shadow */
            margin-bottom: 20px; /* Adjust the margin as needed */
          }
          .background-image {
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            filter: brightness(80%);
            opacity: 0.9;
          }
          `}
        </style>
      </div>
      <div className='text-center pb-5'>
        {popularPlaces.map(popularPlace => (
          <div key={popularPlace.city}>
            <h2 className='beautiful-subtitle pt-3'>{popularPlace.city}</h2>
            <div className='container'>
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
        <button onClick={(e) => { e.stopPropagation(); setShowMaps(!showMaps); }} className='btn' style={{ border: '1px solid black' }}>
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
