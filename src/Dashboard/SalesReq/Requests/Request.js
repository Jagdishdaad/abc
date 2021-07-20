import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { Pie } from "react-chartjs-2";
import "./Request.css";
import axios from "axios";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const config = {
  type: "pie",
};

function Request() {
  const [accepted, setaccepted] = useState(0);
  const [rejected, setrejected] = useState(0);
  const [pending, setpending] = useState(0);
  const [inprocess, setinprocess] = useState(0);
  let temp;
  const getaccpeted = async () => {
    await axios
      .get("http://localhost:7000/user/piechart")
      .then(function (response) {
        temp = response?.data;
      });
    console.log(temp);
    setaccepted(temp.data[0].Completed);
    setrejected(temp.data[0].rejected);
    setpending(temp.data[0].pending);
    setinprocess(temp.data[0].Inprogress);
  };

  useEffect(() => {
    getaccpeted();
  }, []);

  const data = {
    datasets: [
      {
        label: "My First Dataset",
        data: [
          pending ? pending : 0,
          rejected ? rejected : 0,
          inprocess ? inprocess : 0,
          accepted ? accepted : 0,
        ],
        backgroundColor: ["#FFB600", "#F03738", "#56CCF2", "#3CC13B"],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    legend: {
      display: false,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "26%",
        padding: "1vw",
        backgroundColor: "white",
        background: "#2D2D2D",
        border: "0.5px solid #FFFFFF",
        boxSizing: "border-box",
        borderRadius: "10px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
        }}
      >
        <Typography className="titlereq">Requests</Typography>
        <Typography className="subtitle">This month</Typography>
      </div>
      <div style={{ width: "17vw" }}>
        <Pie data={data} config={config} options={options} />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          padding: "2%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "0.5vw",
            }}
          >
            <FiberManualRecordIcon className="icon1" />
            <Typography className="iconText">Complete</Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FiberManualRecordIcon className="icon2" />
            <Typography className="iconText">Pending</Typography>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "0.5vw",
            }}
          >
            <FiberManualRecordIcon className="icon3" />
            <Typography className="iconText">Rejected</Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FiberManualRecordIcon className="icon4" />
            <Typography className="iconText">In-progress</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;

{
  /* <Card className="card1">
        <CardContent className="Card">
          <Typography>
            <div style={{ fontSize: "30px" }}>Requests</div>
            <div>This month</div>
          </Typography>
          <div>
            <Typography>
              {" "}
              <Pie data={data} config={config} />
            </Typography>
          </div>
          <div className="Status">
            <Typography>
              <div>
                <FiberManualRecordIcon className="icon1" />
                Complete
              </div>
              <div>
                <FiberManualRecordIcon className="icon2" />
                Pending
              </div>
            </Typography>

            <Typography>
              <div>
                <FiberManualRecordIcon className="icon3" />
                Rejected
              </div>
              <div>
                <FiberManualRecordIcon className="icon4" />
                In-progress
              </div>
            </Typography>
          </div>
        </CardContent>
      </Card> */
}
