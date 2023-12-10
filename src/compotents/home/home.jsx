import React from "react";
import "./home.css";
import myImg from "../../img/myImg.png";

function Home() {
  return (
    <section className="home-page" id="scroll-to-home">
      <div className="text-layout">
        <h1>
          <span id="titleLine1">Hello</span>
          <span>I'm Shubham Mane</span>
        </h1>
        <h4>Software Engineer, Chess</h4>
        <h4>and Travel Enthusiast.</h4>
        <h4>Welcome to my Portfolio!</h4>
      </div>
      <div className="img-background">
        <img className="img" src={myImg} alt="myImage" />
      </div>
    </section>
  );
}

export default Home;
