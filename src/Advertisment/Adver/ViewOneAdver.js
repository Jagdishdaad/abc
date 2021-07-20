import React, { useState, useEffect } from "react";
import BackButton from "../../AddingAdd/BackButton/BackButton";
import PerChart from "../AdverPerf/AdPerChart/AdPerChart";
import { makeStyles, Typography } from "@material-ui/core";
import ButtonGroup from "../../ButtonGroup";
import createTypography from "@material-ui/core/styles/createTypography";
import axios from "axios";

const useStyles = makeStyles({
  Istline: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1.6vw",
    lineHeight: "2vw",
    letterSpacing: "0.1px",
    color: "#FFFFFF",
  },
  secondline: {
    marginLeft: "5%",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1.6vw",
    lineHeight: "2vw",
    letterSpacing: "0.1px",
    color: "#FFB600",
  },
});

function ViewOneAdver({ setIndex, adverId }) {
  const classes = useStyles({});
  const [istoday, setistoday] = useState(true);
  const [ismonth, setismonth] = useState(false);
  const [isyear, setisyear] = useState(false);
  let temp;
  const [ad, setAd] = useState();
  const fetchAdvertisement = async () => {
    const response = await axios.get(
      `http://localhost:7000/user/advertisement/${adverId}`
    );
    temp = response?.data;

    setAd(temp?.data[0]);
  };

  useEffect(() => {
    fetchAdvertisement();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "4%" }}>
      <div style={{ display: "flex", marginLeft: "-5%" }}>
        <BackButton setIndex={setIndex} />
      </div>

      <div style={{ display: "flex", marginBottom: "6%", marginTop: "6%" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "#2D2D2D",
            width: "24vw",
            height: "20vw",
            borderRadius: "1vw",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "8%",
            height: "20vw",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", width: "40vw" }}>
            <createTypography className={classes.Istline}>
              Adevertisement:
            </createTypography>
            <createTypography className={classes.secondline}>
              dhgh
            </createTypography>
          </div>
          <div style={{ display: "flex" }}>
            <createTypography className={classes.Istline}>
              Dimentions:
            </createTypography>
            <createTypography className={classes.secondline}>
              {ad?.dimenstion}
            </createTypography>
          </div>
          <div style={{ display: "flex" }}>
            <createTypography className={classes.Istline}>
              Format:
            </createTypography>
            <createTypography className={classes.secondline}>
              {ad?.format}
            </createTypography>
          </div>
          <div style={{ display: "flex" }}>
            <createTypography className={classes.Istline}>
              Product/Service:
            </createTypography>
            <createTypography className={classes.secondline}>
              {ad?.product_type}
            </createTypography>
          </div>
          <div style={{ display: "flex" }}>
            <createTypography className={classes.Istline}>
              Ad Placement:
            </createTypography>
            <createTypography className={classes.secondline}>
              {ad?.adv_placement}
            </createTypography>
          </div>
          <div style={{ display: "flex" }}>
            <createTypography className={classes.Istline}>
              Ad Placement Screen:
            </createTypography>
            <createTypography className={classes.secondline}>
              {ad?.adv_page}
            </createTypography>
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginBottom: "6%" }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "24px",
              lineHeight: "33px",
              letterSpacing: "0.4px",
              color: "#FFFFFF",
            }}
          >
            {" "}
            Adevertisement Performance
          </Typography>
          <ButtonGroup
            setistoday={setistoday}
            setismonth={setismonth}
            setisyear={setisyear}
            isyear={isyear}
            istoday={istoday}
            ismonth={ismonth}
          />
        </div>
        <PerChart />
      </div>
    </div>
  );
}

export default ViewOneAdver;
