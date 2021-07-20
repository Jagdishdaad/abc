import { Card, makeStyles, Typography } from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  Istline: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.1vw",
    lineHeight: "1.5vw",
    color: "#FFFFFF",
    marginRight: "4%",
  },
  IIndline: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.1vw",
    lineHeight: "1.5vw",
    color: "#FFFFFF",
  },
  IIndlinenimp: {
    fontFamily: "Open Sans",
    width: "9vw",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.9vw",
    color: "#FFFFFF",
  },
});

function CustomerOrderCard({ details }) {
  const classes = useStyles();
  return (
    <Card
      style={{
        width: "42vw",
        height: "25vw",
        marginTop: "3%",
        background: " #2D2D2D",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2%",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Order:</Typography>
          <Typography className={classes.IIndline}>{details.order}</Typography>
        </div>
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Vendor Name:</Typography>
          <Typography className={classes.IIndline}>
            {details.vendorName}
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Type:</Typography>
          <Typography className={classes.IIndlinenimp}>
            {details.type}
          </Typography>
        </div>
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Delivery Address:</Typography>
          <Typography className={classes.IIndlinenimp}>
            {details.deliveryAddress}
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Quantity:</Typography>
          <Typography className={classes.IIndline}>
            {details.quantity}
          </Typography>
        </div>
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Pitch Amount:</Typography>
          <Typography className={classes.IIndline}>
            {details.pitchAmount}
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Placed on:</Typography>
          <Typography className={classes.IIndline}>
            {details.placedOn}
          </Typography>
        </div>
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Pitch Status:</Typography>

          {details.pitchStatus === "acceptedPitch" ? (
            <div
              style={{
                display: "flex",
                width: "7vw",
                height: "1vw",
                border: "0.1vw solid #32CD32",
                alignItems: "center",
                padding: "2%",
                borderRadius: "0.2vw",
              }}
            >
              <FiberManualRecord
                style={{ width: "1vw", height: "1vw", color: "#3CC13B" }}
              />
              <Typography
                style={{
                  marginLeft: 13,
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "0.9vw",
                  lineHeight: "2vw",
                  color: "#3CC13B",
                }}
              >
                Completed
              </Typography>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                width: "7vw",
                height: "1vw",
                border: "0.1vw solid #FFB600",
                alignItems: "center",
                padding: "2%",
                borderRadius: "0.2vw",
              }}
            >
              <FiberManualRecord
                style={{ width: "1vw", height: "1vw", fill: "#FFB600" }}
              />
              <Typography
                style={{
                  marginLeft: 13,
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "0.9vw",
                  lineHeight: "2vw",
                  color: "#FFB600",
                }}
              >
                In process
              </Typography>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Deliverd by:</Typography>
          <Typography className={classes.IIndline}>
            {details.deliveredBy}
          </Typography>
        </div>
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Pitch Date:</Typography>
          <Typography className={classes.IIndline}>
            {details.pitchDate}
          </Typography>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Required:</Typography>
          {details.required === "1" ? (
            <div
              style={{
                width: "5.5vw",
                height: "2vw",
                borderRadius: "20vw",
                backgroundColor: "#F03738",
              }}
            >
              <Typography
                style={{
                  marginLeft: 13,
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "0.9vw",
                  lineHeight: "2vw",
                  color: "#2D2D2D",
                }}
              >
                URGENT
              </Typography>
            </div>
          ) : (
            <div
              style={{
                width: "5.5vw",
                height: "2vw",
                borderRadius: "20vw",
                backgroundColor: "#32CD32",
              }}
            >
              <Typography
                style={{
                  marginLeft: 13,
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "0.9vw",
                  lineHeight: "2vw",
                  color: "#2D2D2D",
                }}
              >
                FLEXIBLE
              </Typography>
            </div>
          )}
        </div>
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography className={classes.Istline}>Overdue:</Typography>
          <Typography className={classes.IIndline}>
            {details.overDue}
          </Typography>
        </div>
      </div>
    </Card>
  );
}

export default CustomerOrderCard;
