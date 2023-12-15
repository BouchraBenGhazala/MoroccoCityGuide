import React, { useEffect, useState } from 'react';

const Histories=() => {
  const [historyCities, setHistoryCities] = useState([]);
  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/historyCities')
      .then(response => response.json())
      .then(data => setHistoryCities(data.historyCities))  // Access the "stadium" array
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className='ContainerHistories'>
      <h1>Histories</h1>
      {historyCities.map(historyCities => (
            <span key={historyCities.id}>
              <h3>{historyCities.cityName}</h3><br/>
              {historyCities.overview}<br/>
              {historyCities.climate}

            </span>
        ))}
                <style>
          {
            `
            .ContainerHistories{
              padding-top: 150px;
            }
            `
          }
        </style>
    </div>
  );
}
export default Histories;