import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="footer-text">
              © 2023 MoroccanCitiesGuide.<br/>
              Bouchra BENGHAZALA - Oussama FECHTALI
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
          .footer {
            background-color: #991a2d;
            padding: 20px 0;
            color: rgba(240, 235, 229, 255);
            font-family: 'Amiri', sans-serif;
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
