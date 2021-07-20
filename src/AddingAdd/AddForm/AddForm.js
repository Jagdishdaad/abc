import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import SelectB from "./SelectButton/SelectB";
import AddImage from "./AddImage";
import SelectB2 from "./SelectButton/SelectB2";
import SelectB3 from "./SelectButton/SelectB3";
import { Input, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0.3vw",
    color: "green",
    padding: "4.5%",
    backgroundColor: "#2D2D2D",
    borderColor: "#121417",

    width: "25vw",
    height: "3vw",
    color: "white",
    marginTop: "2%",
  },

  input: {
    "&::placeholder": {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "1vw",
      lineHeight: "1.2vw",
      color: "#FFFFFF",
      opacity: 1,
    },
  },
}));

function AddForm() {
  const classes = useStyles();
  const form = useRef(null);
  const [formData, setFormData] = useState({
    image: "",
    dimention: "",
    format: "",
    page: "",
    product: "",
    advertisement_Placement: "",
  });
  const saveData = () => {
    console.log(formData);
    fetch("http://localhost:7000/user/enter_advertisement", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setFormData(json.formData));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveData();
    setFormData({
      ...formData,
      image: "",
      product: "",
      advertisement_Placement: "",
      // dimention: "",
      // format: "",
      // page: "",
    });
  };

  const handleImagechange = (event) => {
    console.log(formData);
    setFormData({
      ...formData,
      image: URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleProductChange = (event) => {
    setFormData({ ...formData, product: event.target.value });
  };
  const handlePlacementChange = (event) => {
    setFormData({ ...formData, advertisement_Placement: event.target.value });
  };
  return (
    <form
      style={{ display: "flex", margin: "3% 3% 3% 5%" }}
      onSubmit={handleSubmit}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          marginTop: "5%",
        }}
      >
        <AddImage image={formData?.image} />

        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleImagechange}
          style={{ display: "none" }}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FFB600",
              textTransform: "none",
              marginTop: "5%",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              marginLeft: "16.5%",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "19px",
              textAlign: "center",
              color: "#08090C",
            }}
            component="span"
          >
            Select From Device
          </Button>
        </label>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "36vw",
          justifyContent: "space-between",
          marginLeft: "16%",
          marginTop: "-2%",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "33px",
            letterSpacing: "0.1px",
            color: "#FFFFFF",
          }}
        >
          Advertisment
        </Typography>
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.1px",
            color: "#FFFFFF",
            opacity: 0.2,
          }}
        >
          Dimensions
        </Typography>
        <SelectB formData={formData} setFormData={setFormData} />
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.1px",
            color: "#FFFFFF",
            opacity: 0.2,
          }}
        >
          {" "}
          Advertisment Format
        </Typography>
        <SelectB2 formData={formData} setFormData={setFormData} />
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.1px",
            color: "#FFFFFF",
            opacity: 0.2,
          }}
        >
          Product
        </Typography>
        <Input
          placeholder="Type Product/Services"
          onChange={handleProductChange}
          variant="text"
          classes={{
            root: classes.root,
            input: classes.input,
          }}
        />
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.1px",
            color: "#FFFFFF",
            opacity: 0.2,
          }}
        >
          {" "}
          Advertisment Placement
        </Typography>
        <Input
          placeholder="Hero Banner"
          variant="text"
          onChange={handlePlacementChange}
          classes={{
            root: classes.root,
            input: classes.input,
          }}
        />
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.1px",
            color: "#FFFFFF",
            opacity: 0.2,
          }}
        >
          Advertisment Placement Page
        </Typography>
        <SelectB3 formData={formData} setFormData={setFormData} />
        <button
          type="submit"
          style={{
            backgroundColor: "orange",
            width: "5vw",
            height: "3vw",
            borderRadius: "0.5vw",
            margin: "2% 0 0 3%",
          }}
        >
          Save{" "}
        </button>
      </div>
    </form>
  );
}

export default AddForm;
