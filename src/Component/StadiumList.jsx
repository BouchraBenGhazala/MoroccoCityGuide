import React, { useEffect, useState } from 'react';

const StadiumList = () => {
  const [stadiums, setStadiums] = useState([]);

  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/stadium')
      .then(response => response.json())
      .then(data => setStadiums(data.stadium))  // Access the "stadium" array
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  
  return (
    <div>
      <h1 className='text-center'>Moroccan's popular stadiums</h1>
      <div className="background-div">
      <p className='ml-5 mr-5'>In a historic moment for Moroccan football, the nation is set to play host to the FIFA World Cup in 2030 across six distinguished stadiums. 
      <br/>These venues, strategically chosen to showcase the country's passion for the sport, are poised to become the epicenter of global footballing fervor. <br/>
      From the vibrant cityscape of Casablanca to the cultural heart of Marrakech, each stadium contributes its unique charm to the tournament's landscape.<br/>
      As Morocco prepares to welcome teams and fans from around the world, these six iconic stadiums, meticulously maintained and equipped with state-of-the-art facilities, stand as a testament to the country's commitment to delivering a world-class World Cup experience in 2030.<br/>
      The anticipation is palpable as the countdown begins for this momentous event that will undoubtedly leave an indelible mark on the history of Moroccan sports.</p>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-9'>
          {stadiums.map(stadium => (
            <div key={stadium.id} className='container ml-3 mr-3'>
              <div className='row'> 
                <h3 className='font-weight-bold mb-4'>{stadium.name}</h3><br/>
                <div className="d-flex mb-2">
                  <p className='mr-2 '><a href={`http://localhost:3000/stadiums/${stadium.id}`}>{stadium.formerName.join(', ')}</a> |</p>
                  <p className='mr-2'>Capacity: <span className='text-muted font-weight-bold'>{stadium.capacity}</span> seats |</p>
                  <p className='mr-2'>Owner: <span className='text-muted font-weight-bold'>{stadium.owner}</span> |</p>
                  <p>Surface: <span className='text-muted font-weight-bold'>{stadium.field.surface}</span></p>
                </div>
                <a href={`http://localhost:3000/stadiums/${stadium.id}`}>
                <img src={stadium.image} alt={stadium.name} width="800" height="400" className="img-fluid mb-5 rounded"/>    
                </a>
              </div>

            </div>
      ))}
          </div>
          <div className='col-2 ml-4 bg-light'>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
            </div>
        </div>

      </div>
      <style>
        {`
        .background-div{
          background-color: #e9ecef;
          padding: 20px;
          margin: 20px;
        }
        a{
          text-decoration: none;
          color: black;
        }
        `}
      </style>
    </div>
  );
};
export default StadiumList;
