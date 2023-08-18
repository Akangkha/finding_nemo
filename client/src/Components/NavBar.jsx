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
        <Link to="/found" className="color-blue navItem">
          Found
        </Link>
        <Link to="/lost" className="color-blue navItem">
          Lost
        </Link>
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
