import "./PopularServices.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { createUseStyles } from "react-jss";
import Progress from "react-progressbar";
import { ContactMailOutlined } from "@material-ui/icons";

const useStyles = createUseStyles({
  serviceline: {
    fontFamily: "Open Sans !important",
    fontStyle: "normal",
    fontWeight: "normal !important",
    fontSize: "0.9vw !important",
    lineHeight: "1.6vw !important",
    color: "#FFFFFF",
    letterSpacing: "0.4px !important",
    marginBottom: "0.4vw !important",
  },
  sales: {
    fontFamily: "Open Sans !important",
    fontStyle: "normal",
    fontWeight: "normal !important",
    fontSize: "0.8vw !important",
    lineHeight: "1vw !important",
    color: "#FFFFFF",
    letterSpacing: "0.4px !important",
    marginBottom: "0.4vw !important",
    color: "#08090C",
  },
});

function createData(count, service_type) {
  return { count, service_type };
}

function PopularServices() {
  let temp;
  let temparr = [];

  const [ser, setSer] = useState([]);
  const getdata = async () => {
    await axios
      .get("http://localhost:7000/user/popular_service")
      .then(function (response) {
        temp = response?.data;

        for (var i = 0; i < temp.data.length; i++) {
          temparr.push(
            createData(temp.data[i].count, temp.data[i].service_type)
          );
        }

        setSer(temparr);
      });
  };

  useEffect(() => {
    getdata();
  }, []);
  const c1 = ser[0]?.count * 3;
  const c2 = ser[1]?.count * 3;
  const c3 = ser[2]?.count * 3;
  const c4 = ser[3]?.count * 3;
  const c5 = ser[4]?.count * 3;

  console.log(c1, c2, c3);

  const classes = useStyles();
  return (
    <div className="popularServices">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "68%",
        }}
      >
        <Typography className="popularline1">Popular Services</Typography>
        <Typography className="popularline2">(Monthwise)</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            marginTop: "2vw",
            height: "8vw",
          }}
        >
          <Typography className={classes.serviceline}>
            {ser[0]?.service_type}
          </Typography>
          <Typography className={classes.serviceline}>
            {ser[1]?.service_type}
          </Typography>
          <Typography className={classes.serviceline}>
            {ser[2]?.service_type}
          </Typography>
          <Typography className={classes.serviceline}>
            {ser[3]?.service_type}
          </Typography>
          <Typography className={classes.serviceline}>
            {ser[4]?.service_type}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 38,
            marginLeft: 40,
            marginTop: "2vw",
            height: "8vw",
          }}
        >
          {ser[0]?.count && (
            <div
              style={{
                height: "2vw",
                width: `${c1}vw`,
                backgroundColor: "#56CCF2",
              }}
            >
              <typography className={classes.sales}>Sales</typography>
            </div>
          )}
          {ser[1]?.count && (
            <div
              style={{
                height: "2vw",
                width: `${c2}vw`,
                backgroundColor: "#EB5757",
              }}
            >
              <typography className={classes.sales}>Sales</typography>
            </div>
          )}
          {ser[2]?.count && (
            <div
              style={{
                height: "2vw",
                width: `${c3}vw`,
                backgroundColor: "#FFB600",
              }}
            >
              <typography className={classes.sales}>Sales</typography>
            </div>
          )}
          {ser[3]?.count && (
            <div
              style={{
                height: "2vw",
                width: `${c4}vw`,
                backgroundColor: "#219653",
              }}
            >
              <typography className={classes.sales}>Sales</typography>
            </div>
          )}
          {ser[4]?.count && (
            <div
              style={{
                height: "2vw",
                width: `${c5}vw`,
                backgroundColor: "#BB6BD9",
              }}
            >
              <typography className={classes.sales}>Sales</typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PopularServices;
