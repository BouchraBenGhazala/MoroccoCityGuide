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
      <h1>Stadium List</h1>
        {stadiums.map(stadium => (
          <span key={stadium.id}>
            {stadium.name}<br/>
            <img src={stadium.image} alt={stadium.name} /><br/>
            
          </span>
        ))} <br/>



    </div>
  );
};
export default StadiumList;
