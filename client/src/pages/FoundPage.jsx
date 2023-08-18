import React, { useState } from "react";
import "../styles/FoundCard.css";
// import FoundCard from "../Components/FoundCard";
import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import Search from "../Components/Search";
import ListItem from "../Components/ListItem";
const FoundPage = () => {
  const [foundState, setFoundState] = useState(false);
  const updateItemFound = () => {
    setFoundState(!foundState);
  };
  const [search, setSearch] = useState("");
  const updateSearch = (txt) => {
    setSearch(txt);
  };

  return (
    <div
      className="claimCard"
      style={{ overflow: foundState ? "hidden" : "auto" }}
    >
      <NavBar updateItemLost={updateItemFound} />
      {foundState && <Card updateItemFound={updateItemFound} />}
      <Search updateSearch={updateSearch} />
      <ListItem searchText={search} section={"FOUND"} />
    </div>
  );
};

export default FoundPage;
