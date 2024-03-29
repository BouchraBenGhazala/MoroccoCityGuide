import React, { useEffect, useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import bgimg from "../Images/bghtls.jpg";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const HotelGallery = ({ photos }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
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

const HotelCard = ({
  hotel,
  addToFavorites,
  removeFromFavorites,
  isFavourite,
}) => {
  const handleAddToFavorites = () => {
    addToFavorites(hotel);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(hotel);
  };

  return (
    <div
      className="hotel-card"
      style={{ backgroundColor: "rgb(240,235,229,255)" }}
    >
      <div className="hotel-photos">
        <HotelGallery photos={hotel.photos} />
      </div>
      <div className="hotel-details">
        <h5 className="hotel-title" style={{ marginTop: "40px" }}>
          {hotel.name}
        </h5>
        <p style={{ margin: "25px 0" }}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ marginRight: "5px" }}
          />
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
        <p>
          {isFavourite ? (
            <button onClick={handleRemoveFromFavorites} className="bouton">
              Remove from Favorites
            </button>
          ) : (
            <button onClick={handleAddToFavorites} className="bouton">
              Add to Favorites
            </button>
          )}
        </p>
      </div>
    </div>
  );
};
const Hotels = () => {
  const [cityHotels, setCityHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStars, setSelectedStars] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [favouriteHotels, setFavouriteHotels] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favouriteHotels");
    if (storedFavorites) {
      setFavouriteHotels(JSON.parse(storedFavorites));
    }
  }, []);
  

  useEffect(() => {
    fetch("http://localhost:8083/CityHotels")
      .then((response) => response.json())
      .then((data) => {
        setCityHotels(data.CityHotels);
        const cities = data.CityHotels.map((city) => city.cityName);
        setCityOptions(cities);
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

  const addToFavorites = (hotel) => {
    const updatedFavorites = [...favouriteHotels, hotel];
    setFavouriteHotels(updatedFavorites);
    localStorage.setItem("favouriteHotels", JSON.stringify(updatedFavorites));
  };
  

  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favouriteHotels];
    updatedFavorites.splice(index, 1);
    setFavouriteHotels(updatedFavorites);
    localStorage.setItem("favouriteHotels", JSON.stringify(updatedFavorites));
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
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#D9AC30",
        paddingBottom: "80px",
      }}
    >
      <div>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="overlay"></div>
          <h1 className="text-center mb-4 mt-4 beautiful-Title">
            Disover Moroccan Hotels
          </h1>
        </div>
        <div
          className="background-div"
          style={{
            color: "#FFFFFF",
            padding: "20px",
            marginBottom: "50px",
            marginTop: "50px",
            marginLeft: "70px",
            marginRight: "70px",
            backgroundColor: "#991A2D",
          }}
        >
          <p className="ml-3 mr-3 text-center text-hotels">
            Welcome to our exclusive selection of hotels for the 2030 World Cup
            in Morocco, offering a diverse experience ranging from sophisticated
            five-star luxury to the welcoming warmth of three-star
            accommodations. Whether you choose the refined elegance of our
            five-star hotels, the perfect harmony of comfort and convenience in
            our four-star establishments, or the accessible charm of our
            three-star options, each property embodies a commitment to
            excellence, authenticity, and comfort. Elegant rooms, modern
            facilities, strategic proximity to World Cup venues, warm
            hospitality, and affordable rates ensure that your stay is an
            unforgettable experience. We look forward to welcoming you, making
            your World Cup stay as memorable as the action on the field.
          </p>
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
          marginTop: "30px",
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
                <a
                  href={`http://localhost:3000/stadiums/${city.cityId}`}
                  className="city-link"
                >
                  <span
                    className="font-weight-bold"
                    style={{ paddingLeft: "40px" }}
                  >
                    {city.cityName}
                  </span>
                </a>{" "}
              </p>
            </h3>
            {city.hotels.map((hotel, index) => (
              <HotelCard
                key={index}
                hotel={hotel}
                addToFavorites={() => addToFavorites(hotel)}
                removeFromFavorites={() => removeFromFavorites(hotel)}
              />
            ))}
          </div>
        ))}

      <div>
        <h2 className="beautiful-title" style={{ marginTop: "50px" }}>
          Favourite Hotels
        </h2>
        {favouriteHotels.map((hotel, index) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            removeFromFavorites={() => removeFromFavorites(index)}
            isFavourite={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
