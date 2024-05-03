import React from "react";
import "./home.css";
import myImg from "../../img/myImg.png";
import Type from "./typewriter";

function Home() {
  return (
 
    <section className="home-page" id="scroll-to-home">
      
      <div className="text-layout">
        <h1>
          <span id="titleLine1">Hello there! <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span></span>
          <span>I'm Shubham Mane</span>
         
        </h1>
        <h4 style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </h4>
      </div>
      <div className="img-background">
        <img className="img" src={myImg} alt="myImage" />
      </div>
    </section>
  );
}

export default Home;
