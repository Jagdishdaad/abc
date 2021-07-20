import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import AdverFilter from "./AdverFilter.js";
import AdPerButton from "./AdPerButton.js";
import axios from "axios";

function createData(
  adv_page,
  adv_placement,
  clicks,
  created_at,
  dimenstion,
  format,
  id,
  product_type
) {
  return {
    adv_page,
    adv_placement,
    clicks,
    created_at,
    dimenstion,
    format,
    id,
    product_type,
  };
}

function Adver({ setIndex, setAdverId }) {
  const [allAdvertisement, setAllAdvertisement] = useState([]);
  const [newestAdvertisement, setNewestAdvertisement] = useState([]);
  const [oldestAdvertisement, setOldestAdvertisement] = useState([]);
  const [popularAdvertisement, setPopularAdvertisement] = useState([]);
  const [filterId, setFilterId] = useState(-1);

  const getAllAdvertisement = async () => {
    let temp;
    let temparr = [];
    await axios
      .get("http://localhost:7000/user/all_advertisement")
      .then(function (response) {
        temp = response?.data;
      });
    console.log(temp);
    for (var i = 0; i < temp.data.length; i++) {
      temparr.push(
        createData(
          temp.data[i].adv_page,
          temp.data[i].adv_placement,
          temp.data[i].clicks,
          temp.data[i].created_at.slice(0, 10),
          temp.data[i].dimenstion,
          temp.data[i].format,
          temp.data[i].id,
          temp.data[i].product_type
        )
      );
    }
    setAllAdvertisement(temparr);
  };
  const getNewAdvertisement = async () => {
    let temp;
    let temparr = [];
    await axios
      .get("http://localhost:7000/user/getalladvertisementinsc")
      .then(function (response) {
        temp = response?.data;
      });
    for (var i = 0; i < temp.data.length; i++) {
      temparr.push(
        createData(
          temp.data[i].adv_page,
          temp.data[i].adv_placement,
          temp.data[i].clicks,
          temp.data[i].created_at.slice(0, 10),
          temp.data[i].dimenstion,
          temp.data[i].format,
          temp.data[i].id,
          temp.data[i].product_type
        )
      );
    }
    setNewestAdvertisement(temparr);
  };
  const getOldAdvertisement = async () => {
    let temp;
    let temparr = [];
    await axios
      .get("http://localhost:7000/user/getalladvertisementdesc")
      .then(function (response) {
        temp = response?.data;
      });
    for (var i = 0; i < temp.data.length; i++) {
      temparr.push(
        createData(
          temp.data[i].adv_page,
          temp.data[i].adv_placement,
          temp.data[i].clicks,
          temp.data[i].created_at.slice(0, 10),
          temp.data[i].dimenstion,
          temp.data[i].format,
          temp.data[i].id,
          temp.data[i].product_type
        )
      );
    }
    setOldestAdvertisement(temparr);
  };
  const getPopularAdvertisement = async () => {
    let temp;
    let temparr = [];
    await axios
      .get("http://localhost:7000/user/getalladvertisementpopular")
      .then(function (response) {
        temp = response?.data;
      });
    for (var i = 0; i < temp.data.length; i++) {
      temparr.push(
        createData(
          temp.data[i].adv_page,
          temp.data[i].adv_placement,
          temp.data[i].clicks,
          temp.data[i].created_at.slice(0, 10),
          temp.data[i].dimenstion,
          temp.data[i].format,
          temp.data[i].id,
          temp.data[i].product_type
        )
      );
    }
    setPopularAdvertisement(temparr);
  };
  useEffect(() => {
    getAllAdvertisement();
    getNewAdvertisement();
    getOldAdvertisement();
    getPopularAdvertisement();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "3% 3% 5% 3%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "98%",
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
          Advertisment
        </Typography>

        <AdPerButton filterId={filterId} setFilterId={setFilterId} />
      </div>

      {filterId === -1 ? (
        <AdverFilter
          filteredArray={allAdvertisement}
          setIndex={setIndex}
          setAdverId={setAdverId}
        />
      ) : (
        ""
      )}
      {filterId === 0 ? (
        <AdverFilter
          filteredArray={newestAdvertisement}
          setIndex={setIndex}
          setAdverId={setAdverId}
        />
      ) : (
        ""
      )}
      {filterId === 1 ? (
        <AdverFilter
          filteredArray={oldestAdvertisement}
          setIndex={setIndex}
          setAdverId={setAdverId}
        />
      ) : (
        ""
      )}
      {filterId === 2 ? (
        <AdverFilter
          filteredArray={popularAdvertisement}
          setIndex={setIndex}
          setAdverId={setAdverId}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Adver;
