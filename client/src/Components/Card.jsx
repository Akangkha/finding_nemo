import React, { useState } from "react";
import upload from "../assets/gallery.png";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../styles/Card.css";
import { useLocation } from "react-router-dom";

const Card = (props) => {
  const pathName = useLocation();
  const [selectedFile, setSelectedFile] = useState(upload);
  const handleFile = (e) => {
    const file = e.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };
  return (
    <div className="lostContainerOuter">
      <div className="lostContainer">
        {pathName === "lost" && (
          <div className="closeIcon" onClick={() => props.updateItemLost()}>
            <CloseIcon />
          </div>
        )}
        <div className="uploadImg">
          <div></div>
          <img src={selectedFile} alt="logo" width={100} />
          <div className="uploadImgInput">
            <input
              type="file"
              name=""
              id=""
              accept="image/*"
              className="btnGraphic"
              style={{ paddingLeft: "10px", paddingRight: "0" }}
              onChange={handleFile}
            />
            <button className="btnGraphic" style={{ padding: "12.5px 10px" }}>
              Upload Image
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="details">
          <div>
            <h1>File a Lost Report</h1>
            <p>Enter necessary details related to your item.</p>
          </div>
          <form
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="inputField">
              <PersonIcon />
              <input type="text" name="" id="" placeholder="Name" />
            </div>
            <div className="inputField">
              <TitleIcon />
              <input type="text" name="" id="" placeholder="Item Name" />
            </div>
            <div className="inputField">
              <DescriptionIcon />
              <input type="text" name="" id="" placeholder="Item Description" />
            </div>
            <div className="inputField">
              <EmailIcon />
              <input type="text" name="" id="" placeholder="Email" />
            </div>

            <div className="inputField">
              <LocationOnIcon />
              <input type="text" name="" id="" placeholder="Lost Location" />
            </div>
            <div className="submitBtn">
              <button className="btnGraphic" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
