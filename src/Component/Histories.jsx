import mrcacceuilImage from "../Images/mrcacceuil.jpg";
import circleImage from "../Images/pp1.png";

import React, { useEffect, useState } from "react";

const Histories = () => {
  const [historyCities, setHistoryCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8083/historyCities")
      .then((response) => response.json())
      .then((data) => setHistoryCities(data.historyCities))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container-histories">
      <style>
        {`
          body {
            background-color: #D9AC30;
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <div className="header-section">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${mrcacceuilImage})`,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="overlay"></div>
          <h1
            style={{
              margin: "0 auto",
              color: "#991A2D",
              textShadow: "2px 2px #DAA82F",
            }}
          >
            History of Morocco
          </h1>
        </div>
      </div>
      {historyCities.map((city, index) => (
        <div
          key={city.id}
          className={`city-card ${index % 2 === 0 ? "even" : "odd"}`}
        >
          <div className="city-content">
            <h6 className="text-center mb-4 mt-4 beautiful-title">
              {city.cityName}
            </h6>
            <p>{city.overview}</p>
            <div className="city-details">
              <p>
                <strong>Climate:</strong> {city.climate}
              </p>
            </div>
          </div>
          <div className="circle-container">
            <img src={circleImage} alt="Circle" className="circle-image" />
            <div className="circle-info">
              <p>
                <strong>
                  {" "}
                  &nbsp; Population:
                  <br />
                </strong>{" "}
                {city.population.toLocaleString()}
              </p>
              <p>
                <strong>
                  {" "}
                  &nbsp; Year Built:
                  <br />
                </strong>{" "}
                {city.yearBuilt}
              </p>
            </div>
          </div>
          <div className="city-image">
            <img
              src={city.image}
              alt={city.cityName}
              style={{ borderRadius: "30px" }}
              className="city-image-hover"
            />
          </div>
        </div>
      ))}
      <style>
        {`
          .beautiful-title {
            font-family: 'Amiri', sans-serif;
            color: #991a2d;
            font-size: 2.5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
          }
          .container-histories {
            position: relative;
            overflow: hidden;
          }

          .header-section {
            text-align: center;
            color: white;
            position: relative;
          }

          .background-image {
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .overlay {
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .city-card {
            display: flex;
            align-items: center;
            padding: 20px;
            margin: 20px;
            transition: transform 0.3s;
            width: 80%; 
            margin: 0 auto; 
            margin-bottom: 10%;
            position: relative;
          }

          .city-content {
            flex: 1;
            text-align: left;
            width: 40%;
            max-width: 300px;
            padding-right: 20px;
          }

          .circle-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .circle-image {
            width: 50%; 
            height: auto; 
            max-width: 500px; 
            max-height: 250px; 
            object-fit: cover;
          }

          .circle-info {
            position: absolute;
            text-align: center;
            color: white;
            z-index: 1; 
          }

          .circle-info p {
            margin: 0;
          }

          .city-image img {
            width: 500px;
            height: 300px;
            object-fit: cover;
            transition: transform 0.3s;
            transition: all 2s;
          }

          .city-image img:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default Histories;
