import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Typography } from "@material-ui/core";

function BackButton({ setIndex }) {
  return (
    <div style={{ display: "flex", marginLeft: "5%" }}>
      <ArrowBackIcon
        style={{ fill: "#FFFFFF", cursor: "pointer" }}
        onClick={() => {
          setIndex(5);
        }}
      />
      <Typography
        style={{
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "24px",
          lineHeight: "20px",
          color: "#FFFFFF",
          cursor: "pointer",
          marginLeft: "1%",
        }}
        onClick={() => {
          setIndex(5);
        }}
      >
        Back
      </Typography>
    </div>
  );
}

export default BackButton;
{
  /* <button
        style={{
          backgroundColor: "#121417",
          borderColor: "#121417",
          fontSize: "30px",
          color: "white",
          marginTop: "4%",
          marginLeft: "80px",
          cursor: "pointer",
        }}
        onClick={() => setIndex(5)}
      > */
}
