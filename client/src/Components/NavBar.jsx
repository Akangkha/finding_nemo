import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="navBar">
      <Link to="/" className="cursor-pointer title">
        Finding Nemo
      </Link>
      <div>
         {props.navItem=="Found Something ?" &&
        <Link to="/found" style={{ textDecoration: "none" }}>
        <div
          className="color-blue cursor-pointer navItem navButton"
        >
            {props.navItem}
        </div>
        </Link>}

        {props.navItem=="Lost Something ?" &&
        <Link to="/lost" style={{ textDecoration: "none" }}>
        <div
          className="color-blue cursor-pointer navItem navButton"
        >
            {props.navItem}
        </div>
        </Link>}
        
      {props.cardType=="found" &&
        <div
          className="color-blue cursor-pointer navItem navButton"
          onClick={() => props.updateItemFound()}
        >
         Report an item !
        </div>}
      {props.cardType=="lost" &&
        <div
          className=" cursor-pointer navItem navButton"
          onClick={() => props.updateItemLost()}
        >
         Report an item !
        </div>}
      </div>
    </div>
  );
};

export default NavBar;
