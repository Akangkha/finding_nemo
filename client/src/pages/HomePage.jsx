import React from "react";
import Wave from "../assets/Wave";
import "../styles/Home.css";
import HomeCard from "../Components/HomeCard";

const HomePage = () => {
  window.addEventListener('scroll', preventScroll);
  function preventScroll(event) {
    event.preventDefault();
  }
  return (
    <div className="homeScreen">
     geje <HomeCard />
      <Wave />
    </div>
  );
};

export default HomePage;
