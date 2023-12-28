import React, { useEffect, useState } from 'react';
import ball from '../pubsImages/ball football.jpg';
import tshirt from '../pubsImages/maroc tshirt.jpeg';
import flag from '../pubsImages/Morocco flag.png';
import casquette from '../pubsImages/moroccan casquette.jpg';
import { Link } from 'react-router-dom';
import Footer from '../footer';
import homeBG from "../pubsImages/bg2.avif";
import Lottie from 'lottie-react'
import animationData from '../animations/Animation - 1703786124750.json'

const StadiumList = () => {
  const [stadiums, setStadiums] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8083/stadium')
      .then(response => response.json())
      .then(data => setStadiums(data.stadium))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
   
    <div className='ContainerStadium'>
      <div className='headStadiums'>
  
      </div>
      <h1 className='text-center mb-4 beautiful-title mt-4'>Moroccan's Popular Stadiums</h1>
      <div className="row background-div p-4">
        <div className='col-8'>
        <p className='ml-3 mr-3'>In a historic moment for Moroccan football, the nation is set to play host to the FIFA World Cup in 2030 across six distinguished stadiums.
          <br />These venues, strategically chosen to showcase the country's passion for the sport, are poised to become the epicenter of global footballing fervor. <br />
          From the vibrant cityscape of Casablanca to the cultural heart of Marrakech, each stadium contributes its unique charm to the tournament's landscape.<br />
          As Morocco prepares to welcome teams and fans from around the world, these six iconic stadiums, meticulously maintained and equipped with state-of-the-art facilities, stand as a testament to the country's commitment to delivering a world-class World Cup experience in 2030.<br />
          The anticipation is palpable as the countdown begins for this momentous event that will undoubtedly leave an indelible mark on the history of Moroccan sports.</p>
        </div>
        <div className='col-3'>
        <Lottie animationData={animationData} style={{ width: '100%', height: '100%' }}/>
        </div>

      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            {stadiums.map(stadium => (
              <div key={stadium.id} className='container ml-lg-3 mr-lg-3 mb-5'>
                <div className='row'>
                  <h2 className='font-weight-bold beautiful-subtitle mb-2'>{stadium.name}</h2>
                  <div className="d-flex mb-1">
                    <p className='mr-2'><Link to={`/stadiums/${stadium.id}`}><span className='red-color'>{stadium.formerName.join(', ')}</span></Link></p>
                    <p className='mr-2'>Capacity: <span className='field-color font-weight-bold'>{stadium.capacity}</span> seats </p>
                    <p className='mr-2'>Owner: <span className='field-color font-weight-bold'>{stadium.owner}</span> </p>
                    <p>Surface: <span className='field-color font-weight-bold'>{stadium.field.surface}</span></p>
                  </div> 
                  <Link to={`/stadiums/${stadium.id}`} className="image-container"> 
                    <img src={stadium.image} alt={stadium.name} className="img-fluid mb-3 rounded" />
                  </Link>
                </div>
              </div> 
            ))}
          </div>

          <div className='col-lg-3 ml-lg-4 bg-COLOR'>
            <div className="card  floating-card text-center mb-3 mt-3">
              <img src={tshirt} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Moroccan t-shirt</h5>
                <p className="card-text">T-shirt with moroccan flag.</p>
                <a href="https://wanglikear.live/product_details/62837804.html" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={ball} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">YANYODO Kid's Soccer Ball Mini Ball</h5>
                <p className="card-text">The soccer ball is portable & lightweight for easy carry and go. Ideal for indoor, outdoor, playground playing, etc.</p>
                <a href="https://www.amazon.ae/YANYODO-Durable-Training-Soccer-Toddlers/dp/B07PQPBF56?th=1" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={flag} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Moroccan flag</h5>
                <p className="card-text">Buy moroccan flags to celebrate the success.</p>
                <a href="https://seekflag.com/flag-of-morocco/" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={casquette} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Moroccan casquette</h5>
                <p className="card-text">Buy moroccan casquettes to show your citizenship.</p>
                <a href="https://www.jumia.ma/generic-casquette-drapeau-maroc-i-love-morocco-43245755.html" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300&display=swap');
          /* StadiumList.css */
          .background-div {
            background-color: #991a2d;
            padding: 20px;
            margin: 20px;
            color:white;
            filter: brightness(90%);
            opacity: 0.9;
            
          }
          .background-div:hover{
            filter: brightness(100%);
            opacity: 1;
          }
          .headStadiums{
            background-image: url(${homeBG});
            background-size: cover; 
            padding-top:560px;
          }
          a {
            text-decoration: none;
            color: #007bff;
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
          .beautiful-subtitle {
            font-family: 'Amiri', sans-serif;
            color: #991a2d; /* Your preferred text color */
            font-size: 1.8rem; /* Adjust the font size as needed */
            margin-bottom: 10px; /* Adjust the margin as needed */
          }
          .card {
            width: 100%;
            border-radius: 8px;
          }

          .image-container {
            position: relative;
            overflow: hidden;
            width: 100%;
            https://www.visitmorocco.com/en/discover-morocco/dynastic-history-of-morocco
          }

          .image-container img {
            width: 100%;
            height: auto;
            transition: transform 0.3s ease-in-out;
          }

          .image-container:hover img {
            transform: scale(1.2);
           
          }
        

          .ContainerStadium {  
            font-family: 'Amiri', sans-serif;
            //background-color: rgba(240,235,229,255); 
            background-color:#d9ac30;
          }

          .bg-COLOR {
            background-color: #991a2d;
            margin-top:90px;
            border-radius:5px;
            margin-bottom:65px;
          }

          .field-color {
            color: #991a2d;
          }
          .red-color{
            color:#991a2d;
          }
          a:hover{
            color:#991a2d;
            font-weight:bold;
          }
          @keyframes floatAnimation {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .floating-card {
            animation: floatAnimation 3s infinite ease-in-out; /* Adjust the duration as needed */
          }
          /* Add more styles as needed */
        `}
      </style>
    </div>
  );
};

export default StadiumList;
