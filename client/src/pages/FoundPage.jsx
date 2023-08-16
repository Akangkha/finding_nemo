import React,{useState} from "react";
import "../styles/FoundCard.css";
import FoundCard from "../Components/FoundCard";
import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import Search from "../Components/Search";
import ListItems from "../Components/ListItem";
const FoundPage = () => {
  const [foundState, setFoundState] = useState(false);
  const updateItemFound = () => {
    setFoundState(!foundState);
  };
  return (
    <div
      className="claimCard"
      style={{ overflow: foundState ? "hidden" : "auto" }}
    >
      <NavBar updateItemLost={updateItemFound} />
      <Search />
      {foundState && <Card updateItemFound={updateItemFound} />}
      <ListItems />
    </div>
  );
};

export default FoundPage;
