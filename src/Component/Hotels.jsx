import React, { useEffect, useState } from "react";
import "./hotel.css";

const HotelGallery = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex = (currentPhotoIndex + 1) % photos.length;
    setCurrentPhotoIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    setCurrentPhotoIndex(prevIndex);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span onClick={handlePrevClick} style={arrowStyle}>
        &lt;
      </span>
      <img
        className="img-fluid mb-3 rounded"
        src={photos[currentPhotoIndex]}
        alt={`Hotel Photo ${currentPhotoIndex + 1}`}
        style={{
          width: "700px",
          height: "350px",
          margin: "5px",
          objectFit: "cover",
          display: "inline-block",
        }}
      />
      <span onClick={handleNextClick} style={arrowStyle}>
        &gt;
      </span>
    </div>
  );
};

// Style pour les flèches
const arrowStyle = {
  cursor: "pointer",
  fontSize: "36px", // Ajustez la taille selon vos besoins
  margin: "0 10px", // Ajustez la marge selon vos besoins
};

const Hotels = () => {
  const [cityHotels, setCityHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStars, setSelectedStars] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch("http://localhost:8083/CityHotels")
      .then((response) => response.json())
      .then((data) => {
        setCityHotels(data.CityHotels);
        // Extract city names for dropdown options
        const cities = data.CityHotels.map((city) => city.cityName);
        setCityOptions(cities);
        // Set filtered hotels initially to all hotels
        setFilteredHotels(data.CityHotels);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCityChange = (e) => {
    const cityValue = e.target.value;
    setSelectedCity(cityValue);
    filterHotels(cityValue, selectedStars);
  };

  const handleStarsChange = (e) => {
    const starValue = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      const updatedStars = [...selectedStars, starValue];
      setSelectedStars(updatedStars);
      filterHotels(selectedCity, updatedStars);
    } else {
      const updatedStars = selectedStars.filter((star) => star !== starValue);
      setSelectedStars(updatedStars);
      filterHotels(selectedCity, updatedStars);
    }
  };

  const filterHotels = (cityName, stars) => {
    const filteredCityHotels = cityHotels.map((city) => {
      const cityMatches = city.cityName
        .toLowerCase()
        .includes(cityName.toLowerCase());
      const filteredHotels = cityMatches
        ? city.hotels.filter(
            (hotel) =>
              stars.length === 0 || stars.includes(hotel.stars.toString())
          )
        : [];

      return {
        ...city,
        hotels: filteredHotels,
      };
    });

    setFilteredHotels(filteredCityHotels);
  };

  return (
    <div>
      <h1>Hotels</h1>
      {CityHotels.map(hotel => (
          <span key={hotel.cityId}>
            {hotel.cityName}<br/>

          </span>
        ))} <br/>
                <style>
          {
            `
            .ContainerTraditions{
              padding-top: 150px;
            }
            `
          }
        </style>
    </div>
  );
};

export default Hotels;
