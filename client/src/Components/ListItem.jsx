import React, { useState, useEffect } from "react";
import "../styles/Items.css";
import Item from "./Item";
import Search from "./Search";

const ListItems = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      `https://finding-nemo.onrender.com/lostItem/getByCategory?category=${props.section}`
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.section]);

  return (
    <div className="container">
      {items.map((item) => (
        <div key={item._id}>
          <Item key={item._id} data={item} />
        </div>
      ))}
    </div>
  );
};

export default ListItems;
