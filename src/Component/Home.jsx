
import React from "react";
import Footer from "../footer";
const Home=() => {
  return (
    <div className="homeContainer">
      <h1>Home</h1>
      <Footer/>
      <style>
  {
    `
    .homeContainer {
      background-color: rgba(240,235,229,255); 
      padding-top: 100px;
      }
    `
  }

</style>
    </div>
  );
  
}

export default Home;
