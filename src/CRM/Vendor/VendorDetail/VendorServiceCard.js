import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { FiberManualRecord } from "@material-ui/icons";
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

function VendorServiceCard({ details }) {
  const classes = useStyles();
  return (
    <div>
      <Card
        style={{
          width: "38vw",
          display: "flex",
          flexDirection: "column",
          height: "19vw",
          borderBottom: "1px solid #FFFFFF",
          background: " #2D2D2D",
          padding: "2%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", width: "18vw" }}>
            <Typography className={classes.Istline}>Order:</Typography>
            <Typography className={classes.IIndline}>
              {details.order}
            </Typography>
          </div>
          <div style={{ display: "flex", width: "20vw" }}>
            <Typography className={classes.Istline}>Vendor Name:</Typography>
            <Typography className={classes.IIndline}>
              {details.customerName}
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
          <div style={{ display: "flex", width: "18vw" }}>
            <Typography className={classes.Istline}>Type:</Typography>
            <Typography className={classes.IIndlinenimp}>
              {details.type}
            </Typography>
          </div>
          <div style={{ display: "flex", width: "20vw" }}>
            <Typography className={classes.Istline}>
              Delivery Address:
            </Typography>
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
          <div style={{ display: "flex", width: "18vw" }}>
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
          <div style={{ display: "flex", width: "18vw" }}>
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
          <div style={{ display: "flex", width: "18vw" }}>
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
          <div style={{ display: "flex", width: "18vw" }}>
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
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "18vw",
              justifyContent: "space-between",
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
              height: "18vw",
              justifyContent: "space-between",
            }}
          >
            <Typography className={classes.IIndline}>
              {details.order}
            </Typography>
            <Typography className={classes.IIndline}>
              {details.order}
            </Typography>
            <Typography className={classes.IIndline}>
              {details.quantity}
            </Typography>
            <Typography className={classes.IIndline}>
              {details.placedOn}
            </Typography>
            <Typography className={classes.IIndline}>
              {details.deliveredBy}
            </Typography>
            <div
              style={{
                width: 73.31,
                height: 26.42,
                borderRadius: 32,
                backgroundColor: "#F03738",
                marginTop: 6,
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
                  marginTop: 0,
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
            <Typography className={classes.IIndline}>
              {details.customerName}
            </Typography>
            <Typography className={classes.IIndline}>
              {details.pitchAmount}
            </Typography>
            <Typography className={classes.IIndline}>
              {details.pitchAmount}
            </Typography>
            <Typography className={classes.IIndline}>
              {details.pitchStatus}
            </Typography>
            <Typography className={classes.IIndline}>
              {details.pitchDate}
            </Typography>
            <Typography className={classes.IIndline}>
              {details.overDue}
            </Typography>
          </div>
        </div> */}
      </Card>
    </div>
  );
}

export default VendorServiceCard;
