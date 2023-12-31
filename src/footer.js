import React from 'react';
import footerBG from './Images/patterns-temoignage.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="footer-text">
              © 2023 MoroccanCityGuide.<br/>
              Bouchra BENGHAZALA - Oussama FECHTALI ADOUI
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
          .footer {
            background-image: url(${footerBG});
            background-size: cover; 
            padding: 20px 0;
            color: white;
            font-family: 'Amiri', sans-serif;
            font-weight:bold;
          }

          .footer-text {
            margin: 0;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
