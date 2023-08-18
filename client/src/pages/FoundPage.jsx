import React, { useState } from "react";
import "../styles/FoundCard.css";
import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import Search from "../Components/Search";
import ListItem from "../Components/ListItem";

const FoundPage = () => {
  const [foundState, setFoundState] = useState(false);
  const updateItem = () => {
    setFoundState(!foundState);
  };
  const [search, setSearch] = useState("");
  const updateSearch = (txt) => {
    setSearch(txt);
  };
  const page = "FOUND";

  return (
    <div
      className="claimCard"
      style={{ overflow: foundState ? "hidden" : "auto" }}
    >
      <NavBar updateItem={updateItem} section={page} />
      {foundState && <Card updateItem={updateItem} />}
      <Search updateSearch={updateSearch} />
      <ListItem searchText={search} section={page} />
    </div>
  );
};

export default FoundPage;
