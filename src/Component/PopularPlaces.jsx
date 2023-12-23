
import React, { useEffect, useState } from 'react';
//import pageBG from "../Images/destination_slide.jpg";background-image: url(${pageBG});
import Footer from '../footer';
//import bgArtisan from "../Images/bgArtisan.jpg"
import Banding from '../banding';
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
    <div className='ContainerPlaces'>
      <div className="homeContainer">
        <h1 className="text-center beautiful-title">Moroccan's Popular Places</h1>
        <style>
          {`
          .homeContainer {
            
            background-size: cover; 
            height:560px;
            filter: brightness(60%);
            opacity: 0.9;
          }
          .beautiful-title {
            font-family: 'Amiri', sans-serif;
            color: #991a2d; /* Your preferred text color */
            font-size: 2.5rem; /* Adjust the font size as needed */
            text-transform: uppercase;
            letter-spacing: 2px; /* Adjust the letter spacing as needed */
            text-shadow: 3px 3px 2px white; /* Optional: Add a subtle text shadow */
            padding-top:250px;

          }
          `}
        </style>
      </div>
      <div className='text-center pb-5'>
          {popularPlaces.map(popularPlace => (
          <div key={popularPlace.city} >
            <Banding />
            <h2 className=' beautiful-subtitle pt-3'>{popularPlace.city}</h2>
            <div className='container places'>
            <div className='row'>
                {popularPlace.places.map(place => (
                  <div key={place.name} className='col-4'>
                    {/* <h3>{place.name}</h3> */}
                    {/* <p>{place.description}</p> */}
                    <a href=''><img src={place.image} alt={place.name} className='img-fluid mx-auto d-block ' style={{ maxWidth: '100%', height: '100%' }} /></a>
                    <p style={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'center', color: 'white', padding: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>{place.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <br />
          </div>
        )
        )}
      </div>
      <Footer/>

        <style>
        {
            `
            .places{
              background-color:#991a2d;
              padding:30px 10px;
              border-radius:5px;
            }
            .beautiful-subtitle {
              font-family: 'Amiri', sans-serif;
              color: #991a2d; /* Your preferred text color */
              font-size: 3rem; /* Adjust the font size as needed */
              margin-bottom: 10px; /* Adjust the margin as needed */
            }
  
            .ContainerPlaces {  
              font-family: 'Amiri', sans-serif;
              background-color:#d9ac30;
            }

            .img-fluid{
              border-top-left-radius: 100px;
              border-top-right-radius: 100px;
              border-bottom-left-radius: 50px;
              border-bottom-right-radius: 50px;
            }
            .img-fluid:hover{
              filter: brightness(80%);

            }
            
  
            `
          }
        </style>
    </div>
  );
}
export default PopularPlaces;