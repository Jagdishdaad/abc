import React, { useState, useEffect } from "react";
import Addlabels from "./Addlabels/Addlabels.js";
import axios from "axios";
import { Button } from "@material-ui/core";

function AddAdver({ setIndex }) {
  let temp;
  const [totalImpression, setTotalImpression] = useState("");
  const [topAdvertisement, setTopAdvertisement] = useState("");
  const getTotalImpression = async () => {
    await axios
      .get("http://localhost:7000/user/total_impressions")
      .then(function (response) {
        temp = response?.data;
        setTotalImpression(temp.data[0].Total_impression);
      });
  };
  const getTopAdvertisement = async () => {
    await axios
      .get("http://localhost:7000/user/Top_advertisement")
      .then(function (response) {
        temp = response?.data;
        setTopAdvertisement(temp.data[0].product_type);
      });
  };

  useEffect(() => {
    getTotalImpression();
    getTopAdvertisement();
  }, []);
  return (
    <div
      style={{
        dispaly: "flex",
        flexDirection: "column",
        margin: "3% 3% 5% 3%",
      }}
    >
      <Button
        style={{
          width: "11vw",
          height: "3vw",
          background: "#FFB600",
          borderRadius: "4px",
          varient: "contain",
          fontSize: "0.95vw",
          lineHeight: "1.2vw",
          textAlign: "centre",
          color: "#08090C",
          fontFamily: "Open Sans",
          fontStyle: "normal",
          textTransform: "unset",
          cursor: "pointer",
        }}
        onClick={() => setIndex(51)}
      >
        + Add Advertisment
      </Button>

      <div>
        <div
          style={{
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
            marginTop: "3%",
          }}
        >
          <Addlabels title="Total Impression" number={totalImpression} />
          <Addlabels title="Total view" number="56K" />
          <Addlabels title="Top Advertisment" text={topAdvertisement} />
        </div>
      </div>
    </div>
  );
}

export default AddAdver;
