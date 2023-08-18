import React, { useState } from "react";
import upload from "../assets/gallery.png";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";
import "../styles/Card.css";
import axios from "axios";

const Card = (props) => {
  const [formFields, setFormFields] = useState({
    image: upload,
    studentName: "",
    itemTitle: "",
    itemDescription: "",
    email: "",
    lostLocation: "",
    lostTime: "time",
    category: "",
  });

  const handleImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);

      setFormFields((prevFields) => ({
        ...prevFields,
        image: base64,
      }));
    } else
      setFormFields((prevFields) => ({
        ...prevFields,
        image: upload,
      }));
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formFields.image === upload) {
      alert("Invalid Image");
      return;
    }
    try {
      const response = await axios.post(
        "https://finding-nemo.onrender.com/lostItem/addLostItem",
        formFields
      );
      console.log("Form Data:", formFields);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="lostContainerOuter">
     
      <div className="lostContainer">
      {props.returnTo=="foundPage" &&  <div className="closeIcon" onClick={() => {props.updateItemFound()}}>
          <CloseIcon />
        </div>
        </div>}
        {props.returnTo=="lostPage" &&  <div className="closeIcon" onClick={() => {props.updateItemLost()}}>
          <CloseIcon />
        </div>}
        <div className="uploadImg">
          <div></div>
          <img src={formFields.image} alt="logo" width={100} id="imager" />
          <div className="uploadImgInput">
            
            <input
              type="file"
              name=""
              id=""
              accept="image/*"
              className="btnGraphic fileInput"
              style={{ paddingLeft: "10px", paddingRight: "0" }}
              onChange={handleImage}
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="details">
          <div>
            <div className="heading">Report an item !</div>
            <div className="titleInfo">Enter necessary details related to your item.</div>
          </div>
          <form method="POST" onSubmit={handleFormSubmit}>
            {[
              {
                icon: <PersonIcon />,
                name: "studentName",
                placeholder: "Name",
              },
              {
                icon: <TitleIcon />,
                name: "itemTitle",
                placeholder: "Item Name",
              },
              {
                icon: <DescriptionIcon />,
                name: "itemDescription",
                placeholder: "Item Description",
              },
              { icon: <EmailIcon />, name: "email", placeholder: "Email" },
              {
                icon: <LocationOnIcon />,
                name: "lostLocation",
                placeholder: "Lost Location",
              },
            ].map((inputField, index) => (
              <div className="inputField" key={index}>
                {inputField.icon}
                <input
                  type="text"
                  name={inputField.name}
                  placeholder={inputField.placeholder}
                  value={formFields[inputField.name]}
                  onChange={handleFieldChange}
                />
              </div>
            ))}

            <div className="inputField">
              <CategoryIcon />
              <select
                className="select"
                defaultValue=""
                name="category"
                onChange={handleFieldChange}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="LOST">Lost</option>
                <option value="FOUND">Found</option>
              </select>
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

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
