import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/Search.css";

const Search = (props) => {
  const [srcTxt, setSrcTxt] = useState("");
  return (
    <div className="searchOuter">
      <div className="searchBar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Bar"
          className="font-lato"
          value={srcTxt}
          onChange={(e) => {
            props.updateSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
