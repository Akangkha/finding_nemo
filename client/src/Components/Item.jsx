import React from "react";
import "../styles/Items.css";
import LostItem from "../assets/sample-lost.jpeg";

const ListItem = () => {
  return (
    <div className="itemContainer">
      <div className="itemImageContainer">
      <img src={LostItem} alt="" width="100%"/></div>
      <div className="innerContainer">
        <div>Item Name</div>
        <div>Student Name</div>
        <hr/>
        
        <div>Description: Item Description</div>
        <div>Contact Email</div>
        <div>Lost Location</div>
        <div>Item Reported On</div>
      </div> 
      <div className="itemButtons">
      <div className="status">
        <button>PENDING</button>
      </div>
      <div className="itemFound">
        <button>CLAIM IT</button>
      </div>
      </div>
    </div>
  );
};

export default ListItem;
