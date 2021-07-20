import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  a1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    justifyContent: "space-around",
    width: "22vw",
    height: "6vw",
    cursor: "pointer",
  },
  a2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    justifyContent: "space-around",
    width: "22vw",
    height: "6vw",
    borderTop: "1px solid #FFFFFF",
    cursor: "pointer",
  },
  a3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    justifyContent: "space-around",
    width: "22vw",
    height: "6vw",
    cursor: "pointer",
    backgroundColor: "#FFB600",
    color: "black !important",
  },
  a4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    justifyContent: "space-around",
    width: "22vw",
    height: "6vw",
    borderTop: "1px solid #FFFFFF",
    cursor: "pointer",
    backgroundColor: "#FFB600",
    color: "black !important",
  },
});

function CustomerOrder(props) {
  const classes = styles();
  return (
    <div
      className={
        props.orderId === props.index
          ? props.index === 0
            ? classes.a3
            : classes.a4
          : props.index === 0
          ? classes.a1
          : classes.a2
      }
      onClick={() => props.setOrderId(props.index)}
    >
      <Typography
        style={{
          fontFamily: "Open Sans",
          fontStyle: " normal",
          fontWeight: "bold",
          fontSize: "14px",
          lineHeight: "19px",

          paddingLeft: "16.64px",
        }}
      >
        {props.e.order}
      </Typography>
      <Typography
        style={{
          fontFamily: "Open Sans",
          fontStyle: " normal",
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "19px",

          paddingLeft: "16.64px",
        }}
      >
        {props.e.type}
      </Typography>
    </div>
  );
}

export default CustomerOrder;
