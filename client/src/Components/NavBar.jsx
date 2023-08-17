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
        <div
          className=" cursor-pointer navItem navButton"
          onClick={() => props.updateItemLost()}
        >
          Report an item !
        </div>
      </div>
    </div>
  );
};

export default NavBar;
