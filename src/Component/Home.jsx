
import React, { useEffect, useState } from "react";
import Footer from "../footer";
import homeBG from "../pubsImages/bg9.jpg";
import festival from "../Images/festivals.jpeg";
import food from "../Images/Moroccan-Food.jpg";
import crafts from "../Images/crafts.jpg";
import clothes from "../Images/clothess.jpg";
import { Link } from "react-router-dom";
import Banding from "../banding";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const [stadiums, setStadiums] = useState([]);
  const [popularPlaces, setpopularPlaces] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8083/stadium')
      .then(response => response.json())
      .then(data => setStadiums(data.stadium))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/PopularPlaces')
      .then(response => response.json())
      .then(data => setpopularPlaces(data.PopularPlaces))  // Access the "stadium" array
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div className="Container" style={{ display: "flex", flexDirection: "column" }}>
      <div className="homeContainer">
        <h1 className="title">Welcome to the guide of most<br/> popular  Moroccan Cities</h1>
        <style>
          {`
          .homeContainer {
            background-image: url(${homeBG});
            background-size: cover; 
            height:560px;
          }
          .title{
            padding-top: 200px;
            color:#991a2d;
            font-family: 'Amiri', sans-serif;
            font-size:50px;
            font-weight:bold;
            text-shadow: 2px 2px 4px #d9ac30;

          }
          `}
        </style>
      </div>
      
      <div className="slider">
      <Link to={`/popular-places`}><button className="buttonPlaces">Visit Popular places →</button></Link>

        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {popularPlaces.map(popularPlace => (
            <div key={popularPlace.city}>
                          {popularPlace.places.map((place, index) => (
                    index === 0 && (
                      <div key={place.name} className='slide'>
                        <img src={place.image} alt={place.name} className="slide-image" style={{ width: "100%", height: "490px" }} />
                      </div>
                    )
                  ))}
            
              <br />
            </div>
          ))}
        </Carousel>
        <style>
          {
            `
            .slider{
              background-color: #d9ac30;
            }
            .buttonPlaces{
              background-color:#d9ac30;
              color:#991a2d;
              border:none;
              float: right;
              margin:5px 0px;
              font-weight:bold;
            }
  
            .buttonPlaces:hover{
              font-weight:bold;
              text-decoration:underline;
            
            }
            `
          }
        </style>
          </div>
          <Banding/>
      <div className="stadiums">
        <div className="container">
          <div className="row">
            <Link to={`/stadiums`}><button className="buttonStadiums">Visit Stadiums →</button></Link>
            {stadiums.map(stadium => (
              <div key={stadium.id} className="col-4 image-container">
                <Link to={`/stadiums/${stadium.id}`}>
                  <img src={stadium.image} alt={stadium.name} className="img-fluid rounded"  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <style>
          {`
          .stadiums {
            background-color:#d9ac30;
            padding: 10px 0;
          }
          .img-fluid {
            width:100%;
            height: 100%;
            padding: 10px 0;
    
          }

          .image-container img {
            transition: transform 0.3s ease-in-out;
          }

          .image-container:hover img {
            transform: scale(1.1);
            filter: brightness(80%);
            opacity: 0.8;
          }
          .buttonStadiums{
            background-color:#d9ac30;
            color:#991a2d;
            border:none;
            float: right;
            margin:5px 0px;
            font-weight:bold;
          }

          .buttonStadiums:hover{
            font-weight:bold;
            text-decoration:underline;
          
          }
          `}
        </style>
      </div>
      <Banding/>
      <div className="traditions">
      <Link to={`/traditions`}><button className="buttonPlaces">Visit Traditions →</button></Link>

      <div className='container'>
              <div className='row'>
                  <div className='colmn col-3'>
                    <img
                      src={festival}
                      alt={festival}
                      className='img-fluid mx-auto d-block'
                      style={{ maxWidth: '100%', height: "100%"  }}
                      
                    />
                    <p style={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'center', color: 'white', padding: '0px', fontWeight: 'bold', fontSize: '1.2rem' }}>Festivals</p>
                  </div>
                  <div className='colmn col-3'>
                    <img
                      src={food}
                      alt={food}
                      className='img-fluid mx-auto d-block'
                      style={{ maxWidth: '100%', height: '100%' }}
                      
                    />
                    <p style={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'center', color: 'white', padding: '0px', fontWeight: 'bold', fontSize: '1.2rem' }}>local cuisine</p>
                  </div>
                  <div className='colmn col-3'>
                    <img
                      src={crafts}
                      alt={crafts}
                      className='img-fluid mx-auto d-block'
                      style={{ maxWidth: '100%', height: '100%' }}
                      
                    />
                    <p style={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'center', color: 'white', padding: '0px', fontWeight: 'bold', fontSize: '1.2rem' }}>crafts</p>
                  </div>
                  <div className='colmn col-3'>
                    <img
                      src={clothes}
                      alt={clothes}
                      className='img-fluid mx-auto d-block'
                      style={{ maxWidth: '100%', height: '100%' }}
                      
                    />
                    <p style={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'center', color:'white' , padding: '0px', fontWeight: 'bold', fontSize: '1.2rem' }}>traditional clothing</p>
                  </div>
              </div>
              
            </div>
            <style>
          {
            `
   
            .traditions{
              background-color:#d9ac30;
              padding : 10px 0px;
            }
    
            .colmn:hover {
              transform: scale(1.1);
            }

            .img-fluid:hover {
              filter: brightness(80%);
            }

            .img-fluid {
              border-top-left-radius: 80px;
              border-top-right-radius: 80px;
              border-bottom-left-radius: 50px;
              border-bottom-right-radius: 50px;
            }

            `
          }
        </style>
            </div>
      
      <div className="foot">
        <Footer />
        <style>
          {`
          .foot {
            background-color:#d9ac30;
          }
          `}
        </style>
      </div>
    </div>
  );
}

export default Home;

