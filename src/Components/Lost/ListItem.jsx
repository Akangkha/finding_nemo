import React from "react";
import "../../styles/Lost/Items.css";
import Item from "./Item";

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
