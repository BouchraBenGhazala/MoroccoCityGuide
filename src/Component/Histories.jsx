import mrcacceuilImage from "../Images/histoire_0.jpg";
import circleImage from "../Images/pp1.png";
import "./histories.css";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../animations/morocco logo.json";

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
          <h1 className="text-center beautiful-Title">
            History of Moroccan Cities
          </h1>
        </div>
      </div>
      <Lottie
        animationData={animationData}
        style={{ width: "20%", height: "20%" }}
      ></Lottie>
      {historyCities.map((city, index) => (
        <div
          key={city.id}
          className={`city-card ${index % 2 === 0 ? "even" : "odd"}`}
        >
          <div className="city-content">
            <h3 className="text-center mb-4 mt-4 beautiful-title">
              {city.cityName}
            </h3>
            <ul>
              <li>
                <div className="city-details">
                  <p>
                    <p>{city.overview}</p>
                    <strong className="beautiful-title" style={{fontSize:"1rem"}}>
                      Climate:
                    </strong>{" "}
                    {city.climate}
                  </p>
                </div>
              </li>
              <li>
                <div className="circle-container">
                  <img
                    src={circleImage}
                    alt="Circle"
                    className="circle-image"
                  />
                  <div className="circle-info" style={{ color: "#D9AC30" }}>
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
              </li>
              <li>
                <div className="city-image">
                  <img
                    src={city.image}
                    alt={city.cityName}
                    style={{ borderRadius: "30px" }}
                    className="city-image-hover"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      ))}
      <Lottie
        animationData={animationData}
        style={{ width: "20%", height: "20%" }}
      ></Lottie>
    </div>
  );
};

export default Histories;
