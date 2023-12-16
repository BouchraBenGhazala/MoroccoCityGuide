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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center",backgroundColor:"rgb(240,235,229,255)",paddingBottom: "80px"}}
    >
      <div style={{ marginTop: "120px" }}>
        <h1 className="text-center mb-4 mt-4 beautiful-title">Welcome To Our Hotels</h1>
        <div className="background-div">
          <div style={{ marginTop: "30px" }}>
            <p className="ml-5 mr-5 text-center text-hotels">
              Welcome to our exclusive selection of hotels for the 2030 World
              Cup in Morocco, offering a diverse experience ranging from
              sophisticated five-star luxury to the welcoming warmth of
              three-star accommodations. Whether you choose the refined elegance
              of our five-star hotels, the perfect harmony of comfort and
              convenience in our four-star establishments, or the accessible
              charm of our three-star options, each property embodies a
              commitment to excellence, authenticity, and comfort. Elegant
              rooms, modern facilities, strategic proximity to World Cup venues,
              warm hospitality, and affordable rates ensure that your stay is an
              unforgettable experience. We look forward to welcoming you, making
              your World Cup stay as memorable as the action on the field.
            </p>
          </div>
        </div>
      </div>

      <div className="search-bar" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by City Name"
          value={selectedCity}
          onChange={handleCityChange}
          list="cityOptions"
          style={{
            padding: "10px", // Adjust the padding as needed
            fontSize: "16px", // Adjust the font size as needed
            border: "1px solid #ccc", // Adjust the border as needed
            borderRadius: "5px", // Adjust the border radius as needed
            // Add any additional styles here
          }}
        />
        {cityOptions.length > 0 && (
          <datalist id="cityOptions">
            {cityOptions.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
        )}
      </div>
      <div
        className="stars-checkboxes"
        style={{
          backgroundColor: "rgb(153, 26, 45)",
          padding: "10px", // Adjust the padding as needed
          borderRadius: "8px", // Adjust the border radius as needed
          color: "#fff", // Adjust the text color as needed
        }}
      >
        <p className="text-center rounded">Select Stars</p>
        {[3, 4, 5].map((star) => (
          <label key={star}>
            <input
              type="checkbox"
              value={star}
              checked={selectedStars.includes(star.toString())}
              onChange={handleStarsChange}
            />
            &nbsp;
            {star} Stars&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
        ))}
      </div>
      {filteredHotels
        .filter(
          (city) => city.cityName.toLowerCase() === selectedCity.toLowerCase()
        )
        .map((city) => (
          <div key={city.cityId} className="container ml-3 mr-3">
            <h3>
              <p className="mr-2">
                City:
                <a href={`http://localhost:3000/stadiums/${city.cityId}`}>
                  <span className="text-muted font-weight-bold">
                    {city.cityName}
                  </span>
                </a>{" "}
              </p>
            </h3>
            {city.hotels.map((hotel, index) => (
              <div key={index} className="hotel-container">
                <h5>{hotel.name}</h5>
                <br />
                <div className="hotel-details">
                  <p>
                    Address:{" "}
                    <span className="text-muted font-weight-bold">
                      {hotel.address}
                    </span>
                  </p>
                  <p>
                    Stars:{" "}
                    <span className="text-muted font-weight-bold">
                      {hotel.stars}
                    </span>
                  </p>
                </div>
                <div className="hotel-photos">
                  {/* Utilisez le composant HotelGallery pour afficher les images */}
                  <HotelGallery photos={hotel.photos} />
                </div>
                <div className="hotel-details">
                  <p>
                    Amenities:{" "}
                    <span className="text-muted font-weight-bold">
                      {hotel.amenities.join(", ")}
                    </span>
                  </p>
                  <p>
                    Average Price for 2 Persons:{" "}
                    <span className="text-muted font-weight-bold">
                      {hotel.averagePriceFor2Persn}
                    </span>
                  </p>
                </div>
                <br />
                <br />
                <br />
                <br />
              </div>
            ))}
          </div>
        ))}
        <style>
          {
            `
            @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300&display=swap');
            .beautiful-title {
              font-family: 'Amiri', sans-serif;
              color: #991a2d; /* Your preferred text color */
              font-size: 2.5rem; /* Adjust the font size as needed */
              text-transform: uppercase;
              letter-spacing: 2px; /* Adjust the letter spacing as needed */
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle text shadow */
              margin-bottom: 20px; /* Adjust the margin as needed */
            }
            .text-hotels{
              font-family: 'Amiri', sans-serif;
            }
            
            `

          }
        </style>
    </div>
  );
};

export default Hotels;
