import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./FeedbackStyles.js";
import { Typography, Button, Divider } from "@material-ui/core";
import FeedbackTable from "./FeedbackTable.js";

function createData(first_name, feedback) {
  return {
    first_name,
    feedback,
  };
}

function Feedback({ setIndex, index }) {
  let a, b;
  {
    index === 83 ? (a = "Customer") : (a = "Vendor");
    index === 83 ? (b = "user") : (b = "vendor");
  }
  const [rows, setrows] = useState([]);

  const getFeedback = async () => {
    let temp;
    let temparr = [];
    await axios
      .get(`http://localhost:7000/user/${b}_feedback/`)
      .then(function (response) {
        temp = response?.data;
        console.log(temp);
      });

    for (var i = 0; i < temp.data.length; i++) {
      temparr.push(createData(temp.data[i].first_name, temp.data[i].feedback));
    }
    setrows(temparr);
  };

  useEffect(() => {
    getFeedback();
  }, []);
  const classes = Styles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginRight: "1vw",
        marginLeft: "1vw",
      }}
    >
      <Typography className={classes.boldLetter1}>Feedbacks</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "25%",
          }}
        >
          <Typography
            className={
              index === 100 ? classes.boldLetter2 : classes.boldLetter1
            }
            // onClick={() => setIndex(100)}
          >
            All
          </Typography>
          <Typography
            className={index === 73 ? classes.boldLetter2 : classes.boldLetter1}
            onClick={() => setIndex(73)}
          >
            Vendor
          </Typography>
          <Typography
            className={index === 83 ? classes.boldLetter2 : classes.boldLetter1}
            onClick={() => setIndex(83)}
          >
            User
          </Typography>
        </div>
        <Button
          className={classes.btn}
          onClick={() => {
            index === 83 ? setIndex(81) : setIndex(71);
          }}
        >
          View All {a}
        </Button>
      </div>
      <Divider className={classes.divider} />

      <FeedbackTable rows={rows} />
    </div>
  );
}

export default Feedback;
