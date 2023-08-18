import React, { useState } from "react";
import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import ListItem from "../Components/ListItem";
import Search from "../Components/Search";
import "../styles/Card.css";

const LostPage = () => {
  const [lostState, setLostState] = useState(false);
  const updateItem = () => {
    setLostState(!lostState);
  };
  const page = "LOST";

  const [search, setSearch] = useState("");
  const updateSearch = (txt) => {
    console.log(txt);
    setSearch(txt);
  };

  return (
    <div
      className="lostCard"
      style={{ overflow: lostState ? "hidden" : "auto" }}
    >
      <NavBar updateItem={updateItem} section={page} />
      {lostState && <Card updateItem={updateItem} />}
      <Search updateSearch={updateSearch} />
      <ListItem searchText={search} section={page} />
    </div>
  );
};

export default LostPage;
