import React from "react";
import Iconimg from "./Imageicon1/upload.png";
import { Typography } from "@material-ui/core";

function AddImage({ image }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#2D2D2D",
        flexDirection: "column",
        width: "20vw",
        height: "20vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {image === "" ? (
          <>
            <img src={Iconimg} width="80vw" height="80vh" />
            <Typography
              style={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "12px",
                lineHeight: "16px",
                display: "flex",
                alignItems: "flex-end",
                color: "#4B4A4A",
                marginTop: "10%",
              }}
            >
              Drag and Drop image here
            </Typography>
          </>
        ) : (
          <img src={image} width="280vw" height="280vh" />
        )}
      </div>
    </div>
  );
}

export default AddImage;
