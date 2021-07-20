import { Typography } from "@material-ui/core";
import React from "react";

const Advercard = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#2D2D2D",
        width: "95%",
        height: "12vw",
        borderRadius: " 1vw",
        marginTop: "3%",
        display: "flex",
        padding: "2%",
        cursor: "pointer",
      }}
      onClick={() => {
        props.setAdverId(props.product_id);
        props.setIndex(52);
      }}
    >
      <div
        style={{
          display: "flex",
          width: "76%",
          marginRight: "12%",
          alignItems: "center",
        }}
      >
        <img src={props.product_image} width="30%" height="100%" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "25vw",
            height: "8.5vw",
            justifyContent: "space-between",
            marginLeft: "3%",
          }}
        >
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "2vw",
              lineHeight: "2.5vw",
              color: "#FFFFFF",
            }}
          >
            {props.product_name}
          </Typography>

          <div style={{ display: "flex" }}>
            <Typography
              style={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "1.5vw",
                lineHeight: "2vw",

                color: "#FFFFFF",
              }}
            >
              {props.product_impression}
            </Typography>
            <Typography
              style={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "1.2vw",
                lineHeight: "1.4vw",
                color: "#FFFFFF",
                marginLeft: "2%",
                marginTop: "1.2%",
              }}
            >
              {props.product_i}
            </Typography>
          </div>
          <div style={{ display: "flex", width: "105%" }}>
            <Typography
              style={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "1.5vw",
                lineHeight: "1.8vw",
                color: "#FFFFFF",
              }}
            >
              {props.product_service}
            </Typography>
            <Typography
              style={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "1.1vw",
                lineHeight: "1.7vw",
                color: "#FFFFFF",
                marginLeft: "2%",
                marginTop: "0.6%",
              }}
            >
              {props.product_s}
            </Typography>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1.1vw",
            lineHeight: "1.7vw",
            color: "#FFFFFF",
          }}
        >
          {props.date}
        </Typography>
      </div>
    </div>
  );
};

export default Advercard;
