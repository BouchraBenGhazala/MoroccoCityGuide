// Importations
import React, { useEffect, useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// ... (importations)

// Composant HotelGallery pour afficher les images
const HotelGallery = ({ photos }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    // Préchargez toutes les images en arrière-plan
    photos.forEach((photo) => {
      const img = new Image();
      img.src = photo;
    });
  }, [photos]);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleNextClick = () => {
    const nextIndex = (currentPhotoIndex + 1) % photos.length;
    setCurrentPhotoIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    setCurrentPhotoIndex(prevIndex);
  };

  return (
    <>
      <img
        className="img-fluid mb-3 rounded"
        src={photos[0]}
        alt={`Hotel Photo ${1}`}
        style={{
          width: "700px",
          height: "350px",
          margin: "5px",
          objectFit: "cover",
          display: "inline-block",
          cursor: "pointer",
        }}
        onClick={handleModalShow}
      />

      <Modal show={showModal} onHide={handleModalClose} centered size="lg">
        <Modal.Body>
          <Carousel
            activeIndex={currentPhotoIndex}
            onSelect={(index) => setCurrentPhotoIndex(index)}
          >
            {photos.map((photo, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={photo}
                  alt={`Hotel Photo ${index + 1}`}
                  style={{
                    width: "700px",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#FFD700", cursor: "pointer" }}
            onClick={handlePrevClick}
          />
          <Modal.Title>Photo {currentPhotoIndex + 1}</Modal.Title>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#FFD700", cursor: "pointer" }}
            onClick={handleNextClick}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Style pour les flèches
const arrowStyle = {
  cursor: "pointer",
  fontSize: "36px",
  margin: "0 10px",
};

// Composant HotelCard pour représenter chaque hôtel
const HotelCard = ({ hotel }) => (
  <div className="hotel-card">
    <div className="hotel-photos">
      {/* Utilisez le composant HotelGallery pour afficher les images */}
      <HotelGallery photos={hotel.photos} />
    </div>
    <div className="hotel-details">
      <h5 className="hotel-title" style={{ marginTop: "40px" }}>
        {hotel.name}
      </h5>
      <p style={{ margin: "25px 0" }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "5px" }} />
        <span className="text-muted font-weight-bold">{hotel.address}</span>
      </p>
      <p style={{ margin: "25px 0" }}>
        Stars:{" "}
        <span className="text-muted font-weight-bold">
          {Array.from({ length: hotel.stars }, (_, index) => (
            <FontAwesomeIcon
              icon={faStar}
              key={index}
              style={{ color: "#FFD700" }}
            />
          ))}
        </span>
      </p>
      <p style={{ margin: "25px 0" }}>
        Amenities:{" "}
        <span className="text-muted font-weight-bold">
          {hotel.amenities.join(", ")}
        </span>
      </p>
      <p style={{ margin: "25px 0" }}>
        Average Price for 2 Persons:{" "}
        <span className="text-muted font-weight-bold">
          {hotel.averagePriceFor2Persn}
        </span>
      </p>
    </div>
  </div>
);

// Composant principal Hotels
const Hotels = () => {
  // State et effets (hooks)
  const [cityHotels, setCityHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStars, setSelectedStars] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    // Remplacez 'http://localhost:8080' par l'URL réelle de votre API Express
    fetch("http://localhost:8083/CityHotels")
      .then((response) => response.json())
      .then((data) => {
        setCityHotels(data.CityHotels);
        // Extrait les noms de ville pour les options du menu déroulant
        const cities = data.CityHotels.map((city) => city.cityName);
        setCityOptions(cities);
        // Initialise les hôtels filtrés à tous les hôtels
        setFilteredHotels(data.CityHotels);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
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

  // Rendu du composant principal
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(240,235,229,255)",
        paddingBottom: "80px",
      }}
    >
      <div style={{ marginTop: "120px" }}>
        <h1 className="text-center mb-4 mt-4 beautiful-title">
          Welcome To Our Hotels
        </h1>
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
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
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
          padding: "10px",
          borderRadius: "8px",
          color: "#fff",
        }}
      >
        <p className="text-center rounded">Select Stars</p>
        {[3, 4, 5].map((star) => (
          <label
            key={star}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="checkbox"
              value={star}
              checked={selectedStars.includes(star.toString())}
              onChange={handleStarsChange}
              style={{ display: "none" }}
            />
            <div style={{ textAlign: "center", paddingLeft: "16px" }}>
              {Array.from({ length: star }, (_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={
                    selectedStars.includes(star.toString())
                      ? solidStar
                      : regularStar
                  }
                  style={{
                    color: selectedStars.includes(star.toString())
                      ? "#FFD700"
                      : "#ccc",
                  }}
                />
              ))}
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
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
              <p className="mr-2 city-title">
                City:
                <a
                  href={`http://localhost:3000/stadiums/${city.cityId}`}
                  className="city-link"
                >
                  <span className="text-muted font-weight-bold">
                    {city.cityName}
                  </span>
                </a>{" "}
              </p>
            </h3>
            {city.hotels.map((hotel, index) => (
              <HotelCard key={index} hotel={hotel} />
            ))}
          </div>
        ))}
      <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300&display=swap');
            .beautiful-title {
              font-family: 'Amiri', sans-serif;
              color: #991a2d;
              font-size: 2.5rem;
              text-transform: uppercase;
              letter-spacing: 2px;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
              margin-bottom: 20px;
            }
            .text-hotels{
              font-family: 'Amiri', sans-serif;
            }

            .hotel-card {
              display: flex;
              margin: 10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 8px;
            }

            .hotel-photos {
              flex: 1;
            }

            .hotel-details {
              flex: 2;
              padding: 0 10px;
            }

            .hotel-title {
              font-family: 'Amiri', sans-serif;
              color: #991a2d;
              font-size: 1.8rem;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 10px;
            }

            .city-title {
              font-family: 'Amiri', sans-serif;
              color: #991a2d;
              font-size: 1.8rem;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 10px;
            }
            .city-link {
              color: #991a2d;
              font-weight: bold;
              text-decoration: none;
            }
        
            .city-link:hover {
              text-decoration: underline;
            }
            `}
      </style>
    </div>
  );
};

export default Hotels;
