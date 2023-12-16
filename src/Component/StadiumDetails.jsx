import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StadiumDetails = () => {
    const [stadium, setStadium] = useState(null);
    const [showMaps, setShowMaps] = useState(false); // Add this state
    const { id: stadiumId } = useParams();

  useEffect(() => {
    if (!stadiumId) {
      // Handle the case where the stadiumId is not present
      return;
    }

    // Fetch the stadium data based on the ID
    fetch(`http://localhost:8083/stadium`)
      .then(response => response.json())
      .then(data => {
        // Find the stadium with the matching ID
        const selectedStadium = data.stadium.find(stadium => stadium.id.toString() === stadiumId);
        setStadium(selectedStadium);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [stadiumId]);

  if (!stadium) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <header>
        <h1>{stadium.name}</h1>
      </header>

      <div className="content">
        <img src={stadium.image} alt={stadium.name} className="stadium-image" />

        <section className="description">
          <h3>Description:</h3>
          <p>{stadium.description}</p>
        </section>

        <section className="address">
          <h3>Address:</h3>
          <p><span className='title'>City: </span>{stadium.address.city}</p>
          <p><span className='title'>Neighborhood: </span>{stadium.address.neighborhood}</p>
          <p><span className='title'>Street: </span>{stadium.address.street}</p>
        </section>
        <section className='maps'>
        <h3>Maps:</h3>
        {showMaps && (
          <div>
            {/* Add your Google Maps iframe code here */}
            <iframe
              title="Stadium Location"
              width="100%"
              height="400"
              style={{ border: 0 }}
              src={stadium.frameSource}
              allowFullScreen
            ></iframe>
          </div>
        )}
        <button onClick={() => setShowMaps(!showMaps)} className='btn'>
          {showMaps ? 'Hide Maps' : 'Show Maps'}
        </button>
      </section>

        <section className="events">
          <h3>Events:</h3>
          <ul>
            {stadium.events.map(event => (
              <li key={event}>{event}</li>
            ))}
          </ul>
        </section>

        <section className="field">
          <h3>Field:</h3>
          <p><span className='title'>Length: </span>{stadium.field.length}</p>
          <p><span className='title'>Width: </span>{stadium.field.width}</p>
          <p><span className='title'>Surface: </span>{stadium.field.surface}</p>
        </section>

        <section className="construction">
          <h3>Construction:</h3>
          <p><span className='title'>Opened: </span>{stadium.construction.opened}</p>
          <p><span className='title'>Renovated: </span>{stadium.construction.renovated.join(', ')}</p>
        </section>

        <section className="tenants">
          <h3>Tenants:</h3>
          <ul>
            {stadium.tenants.map(tenant => (
              <li key={tenant}>{tenant}</li>
            ))}
          </ul>
        </section>
      </div>

      <style>
        {`
          body {
            font-family: 'Amiri', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #991a2d;
            color: #333;
          }

          .container {
            padding-top:50px;
            padding-bottom:50px;
            max-width: 800px;
            margin: 0 auto;
            padding-left: 20px;
            padding-right: 20px;
            background-color: rgba(240,235,229,255);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin-top: 150px;
            margin-bottom:50px;
            
          }

          header {
            text-align: center;
            margin-bottom: 20px;
          }

          .stadium-image {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 20px;
          }

          section {
            margin-bottom: 20px;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            margin-bottom: 5px;
          }

          .loading {
            text-align: center;
            margin-top: 50px;
            font-size: 18px;
          }
          h1,h3{
            color:#991a2d;
          }
          .title{
            font-weight:bold;
          }
          .btn {
            color: #991a2d;
            background-color: #fff;
            border: 1px solid #991a2d;
            padding: 5px 10px;
            cursor: pointer;
            transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
          }
          
          .btn:hover {
            background-color: #991a2d;
            color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
};

export default StadiumDetails;
