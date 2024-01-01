import React, { useEffect, useState } from 'react';
import pageBG from "../Images/art-de-vivre.jpg";
import potteryAgadir from '../pubsImages/pottery1.png';
import arganOil from '../pubsImages/agadir-argan-oil-hair-treatment.jpg';
import amazighAgadir from '../pubsImages/amazigh.avif';
import LeatherTangier from '../pubsImages/leager.jpg';
import CeramicTangier from '../pubsImages/ceramic.jpg';
import ceramicCasa from '../pubsImages/ceramic2.jpg';
import JellabaTangier from '../pubsImages/jellaba.jpg';
import CarpetRabat from '../pubsImages/carpet.jpg';
import carpets from '../pubsImages/carpets.jpg';
import Embroidery from '../pubsImages/moroccan_embroiderry.jpg';
import fouta from '../pubsImages/fouta.jpg';
import CaftanRabat from '../pubsImages/caftan.jpg';
import LeatherKech from '../pubsImages/moroccan-leather.jpg';
import textiles from '../pubsImages/textiles.jpg';
import Footer from '../footer';
import Lottie from 'lottie-react'
import animationData from '../animations/trd3.json'
import animationData2 from '../animations/trd1.json'
import animationData1 from '../animations/trd4.json'
import animationLang from '../animations/language.json'
import animationMusic from '../animations/music2.json'
import animationLandmark from '../animations/landmark1.json'
const Traditions = () => {
  const [CitiesTraditionsCultures, setTraditionsCultures] = useState([]);

  useEffect(() => {
    // Replace 'http://localhost:8080' with the actual URL of your Express API
    fetch('http://localhost:8083/TraditionsCultures')
      .then(response => response.json())
      .then(data => setTraditionsCultures(data.CitiesTraditionsCultures))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='container-traditions'>
      <div className="homeContainer">
      <div
          className="background-image"
          style={{
            backgroundImage: `url(${pageBG})`,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="overlay"></div>
          <h1 className="text-center beautiful-Title">
          Explore Moroccan's Traditions
          </h1>
        </div>
        <style>
          {`
          .homeContainer {
            text-align: center;
            position: relative;
          }
          .beautiful-title {
            font-family: 'Amiri', sans-serif;
            color: #991a2d; /* Your preferred text color */
            font-size: 2.5rem; /* Adjust the font size as needed */
            text-transform: uppercase;
            letter-spacing: 2px; /* Adjust the letter spacing as needed */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle text shadow */
            margin-bottom: 20px; /* Adjust the margin as needed */
          }
          .background-image {
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          `}
        </style>
      </div>
      <div style={{ display: 'flex' }}>
      <Lottie animationData={animationData} style={{ width: '20%', height: '20%' }}></Lottie>
      <Lottie animationData={animationData} style={{ width: '20%', height: '20%' }}></Lottie>
      <Lottie animationData={animationData} style={{ width: '20%', height: '20%' }}></Lottie>
      <Lottie animationData={animationData} style={{ width: '20%', height: '20%' }}></Lottie>
      <Lottie animationData={animationData} style={{ width: '20%', height: '20%' }}></Lottie>
      </div>

      <div className='container'>
        <div className='row city-container'>
          <div className='col-lg-8'>
          {CitiesTraditionsCultures.map(city => (
        <div key={city.id}>
     
        <h2 className='pl-5'>{city.name}</h2>
        <Lottie animationData={animationData1} style={{ width: '25%', height: '25%' }}></Lottie>
    
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Lottie animationData={animationLang} style={{ width: '3%', height: '3%' }}></Lottie>: {city.culture.language} 
              <Lottie animationData={animationMusic} style={{ width: '5%', height: '5%' }}></Lottie>: {city.culture.music} &nbsp;
              <Lottie animationData={animationLandmark} style={{ width: '5%', height: '5%' }}></Lottie>: {city.culture.landmarks.join(", ")}
            </div>

        


          {/* Accessing the traditions for the current city */}
          {city.traditions && Object.keys(city.traditions).map(traditionKey => (
            <div key={traditionKey} className='tradition-container'>
              <h3>{traditionKey}</h3>

              {/* Check if the names and images arrays exist before mapping over them */}
              <div className='tradition-items'>
                {city.traditions[traditionKey].names && city.traditions[traditionKey].images && city.traditions[traditionKey].names.map((name, index) => (
                  <div key={index} className='tradition-item'>
                    <img
                      src={city.traditions[traditionKey].images[index]}
                      alt={name}
                      className='img-fluid mx-auto d-block'
                      style={{ maxWidth: '100%',height:"100%", borderRadius: '10px' }}
                    />
                    <p>{name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
          </div>
          <div className='col-lg-3 ml-lg-4 bg-COLOR '>
            <div className="card  floating-card text-center mb-3 mt-3">
              <img src={arganOil} className="card-img-top w-25 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Argan Costemic Oil</h5>
                <p className="card-text small">Agadir Argan Oil Treatment moisturizes, eliminates dry scalp, promotes rapid and healthy hair growth.</p>
                <a href="https://www.lumibeauty.com/gb/agadir-argan-oil-hair-treatment-3114.html" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={potteryAgadir} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Pottery</h5>
                <p className="card-text"> Handmade and hand-painted Moroccan ceramic plate.</p>
                <a href="https://worldshandicraft.com/product/handmade-and-hand-painted-moroccan-ceramic-plate-2/" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={amazighAgadir} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Amazigh clothing</h5>
                <p className="card-text">Berber Caftan Dress Set Cloth CHELHA.</p>
                <a href="https://www.etsy.com/in-en/listing/1145563639/berber-caftan-dress-set-cloth-chelha" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className='space'>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={LeatherTangier} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Leather antic bag</h5>
                <p className="card-text">Leather good for women</p>
                <a href="https://www.moroccancorridor.com/blogs/moroccancorridor/leather-industry-provides-35-thousand-jobs-in-morocco" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={CeramicTangier} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Tangier ceramic</h5>
                <p className="card-text">Tangier Ceramic Bottle Neck Vase</p>
                <a href="https://zohiinteriors.com.au/tangier-ceramic-bottle-neck-vase/" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={JellabaTangier} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Tangier jellaba</h5>
                <p className="card-text">Traditional tangier jellaba</p>
                <a href="https://zohiinteriors.com.au/tangier-ceramic-bottle-neck-vase/" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className='space3'>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={CarpetRabat} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Rabat carpet</h5>
                <p className="card-text">Traditional carpet</p>
                <a href="https://www.orientalartauctions.com/object/art500822-a-rabat-carpet-morocco-1900" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={CaftanRabat} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Rabat caftan</h5>
                <p className="card-text">Traditional rabat caftan</p>
                <a href="https://www.moroccoworldnews.com/2020/07/309230/caftans-moroccos-treasured-traditional-garments-hit-the-global-stage" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className='space3'>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={LeatherKech} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Leather</h5>
                <p className="card-text">Traditional leather</p>
                <a href="https://www.moroccancorridor.com/blogs/moroccancorridor/moroccan-leather" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={carpets} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Marrakech shop carpets</h5>
                <p className="card-text">Buy traditionnal carpets</p>
                <a href="https://www.pinterest.com/pin/how-to-buy-carpets-in-morocco--86975836536848849/" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className='space2'>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={textiles} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Traditional textiles</h5>
                <p className="card-text">Buy traditionnal textiles of Casablanca</p>
                <a href="https://www.shutterstock.com/image-photo/traditional-moroccan-textile-sale-on-medina-771579304" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={ceramicCasa} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Ceramic</h5>
                <p className="card-text">beautiful design of ceramics</p>
                <a href="https://www.veniceclayartists.com/pottery-of-morocco/" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className='space2'>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={fouta} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Moroccan fouta</h5>
                <p className="card-text">beautiful moroccan fouta</p>
                <a href="https://www.bohemiadesign.co.uk/products/moroccan-fouta-hammam-towel-pale-pink" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
            <div className="card floating-card text-center mb-3 mt-3">
              <img src={Embroidery} className="card-img-top w-50 mx-auto pt-2" alt="ball" />
              <div className="card-body">
                <h5 className="card-title text-success">Embroidery</h5>
                <p className="card-text">beautiful moroccan Embroidery</p>
                <a href="https://www.moroccopedia.com/moroccan-embroidery/" target='_blank' className="btn btn-success">Buy now</a>
              </div>
            </div>
          </div>
        </div>    
        </div>
        <Footer/>
      <style>
        {
          `
          /* Traditions.css */
          .bg-COLOR{
            margin-top:120px;
          }
          .space{
            padding-top:550px;
          }
          .space2{
            padding-top:1000px;
          }
          .space3{
            padding-top:700px;
          }
          .container-traditions {
            font-family: 'Amiri', sans-serif;
            background-color: #991a2d;
          }
          
          .city-container {
            background-color: #D9AC30;
            border-radius: 10px;
            padding: 10px;
            margin-bottom: 20px;
          }
          
          .city-container h2 {
            color: #991a2d;
            font-size: 2rem;
          }
          
          .tradition-container {
            margin-bottom: 30px;
          }
          
          .tradition-container h3 {
            color: #991a2d;
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
          
          .tradition-items {
            display: flex;
            flex-wrap: wrap;
          }
          
          .tradition-item {
            flex: 0 0 calc(40% - 20px); /* Three items per row with some spacing */
            margin: 0 10px 10px 0;
            text-align: center;
          }
          
          .tradition-item img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            transition: transform 0.3s;
            transition: all 2s;
          }
          .tradition-item img:hover{
            transform: scale(0.9);
          }
   
          
          
          /* Add any additional styles as needed */
          
          `
        }
      </style>
    </div>
  );
};

export default Traditions;
