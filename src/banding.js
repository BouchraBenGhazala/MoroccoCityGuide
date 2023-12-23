import React from 'react';
import footerBG from './Images/patterns-temoignage.png';

const Banding = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
          </div>
        </div>
      </div>
      <style>
        {`
          .footer {
            background-image: url(${footerBG});
            background-size: cover; 
            padding: 20px 0;

          }

          .footer-text {
            margin: 0;
          }
        `}
      </style>
    </footer>
  );
};

export default Banding;
