import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  Istline: {
    marginTop: 15,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "22px",
    color: "#FFFFFF",
  },
  IIndline: {
    marginTop: 15,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "22px",
    color: "#FFFFFF",
  },
});

function VendorServiceCard() {
  const classes = useStyles();
  return (
    <div>
      <Card
        style={{
          width: "616px",
          height: "240.94px",
          overflowY: "auto",
          borderBottom: "1px solid #FFFFFF",
          background: " #2D2D2D",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            justifyContent: "space-around",
            marginLeft: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              justifyContent: "space-around",
            }}
          >
            <Typography className={classes.Istline}>Order:</Typography>
            <Typography className={classes.Istline}>Type:</Typography>
            <Typography className={classes.Istline}>Quantity:</Typography>
            <Typography className={classes.Istline}>Placed on:</Typography>
            <Typography className={classes.Istline}>Deliverd by:</Typography>
            <Typography className={classes.Istline}>Required:</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              justifyContent: "space-around",
            }}
          >
            <Typography className={classes.IIndline}>
              Ultratech Cement
            </Typography>
            <Typography className={classes.IIndline}>OPC 53</Typography>
            <Typography className={classes.IIndline}>25 bags</Typography>
            <Typography className={classes.IIndline}>DD/MM/YY</Typography>
            <Typography className={classes.IIndline}>DD/MM/YY</Typography>
            <div
              style={{
                width: 73.31,
                height: 26.42,
                borderRadius: 32,
                backgroundColor: "#F03738",
                marginTop: 25,
              }}
            >
              <Typography
                style={{
                  marginLeft: 13,
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "12px",
                  lineHeight: "28px",
                  color: "#2D2D2D",
                }}
              >
                URGENT
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              justifyContent: "space-around",
              marginLeft: 20,
            }}
          >
            <Typography className={classes.Istline}>Customer Name:</Typography>
            <Typography className={classes.Istline}>
              Delivery Address:
            </Typography>
            <Typography className={classes.Istline}>Pitch Amount:</Typography>
            <Typography className={classes.Istline}>Pitch Status:</Typography>
            <Typography className={classes.Istline}>Pitch Date:</Typography>
            <Typography className={classes.Istline}>Overdue:</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              justifyContent: "space-around",
            }}
          >
            <Typography className={classes.IIndline}>XYZ</Typography>
            <Typography className={classes.IIndline}>XYZ</Typography>
            <Typography className={classes.IIndline}>10000</Typography>
            <Typography className={classes.IIndline}>In process</Typography>
            <Typography className={classes.IIndline}>DD/MM/YY</Typography>
            <Typography className={classes.IIndline}>2 days</Typography>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default VendorServiceCard;
