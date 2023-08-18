import React,{useState} from "react";
import "../styles/FoundCard.css";
import FoundCard from "../Components/FoundCard";
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
      <NavBar  updateItemFound={updateItemFound}    navItem="Lost Something ?" cardType="found"/>
      {foundState && <FoundCard updateItemFound={updateItemFound}  returnTo="foundPage"  />}
      <Search />
      <ListItems />
    </div>
  );
};

export default FoundPage;
