import React from "react";
import "../styles/Items.css";
import Item from "./Item";
import Wave from "../assets/Wave"

const ListLostItems = () => {
  return (
    <div className="container">
      <Item />      
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default ListLostItems;
