
import React, { useEffect, useState } from "react";
import Footer from "../footer";
import homeBG from "../pubsImages/bg9.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [stadiums, setStadiums] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8083/stadium')
      .then(response => response.json())
      .then(data => setStadiums(data.stadium))
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
      <div className="stadiums">
        <div className="container">
          <div className="row">
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
          `}
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

