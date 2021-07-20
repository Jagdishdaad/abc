import React, { useEffect, useState } from "react";
import Label from "./Labels/Label.js";
import axios from "axios";

function LabelCards() {
  let temp;
  const [total_vendor, set_total_vendor] = useState(0);
  const [total_user, set_total_user] = useState(0);
  const [month_user, set_month_user] = useState(0);
  const [month_vendor, set_month_vendor] = useState(0);

  const getVendor = async () => {
    await axios
      .get("http://localhost:7000/user/users/vendor")
      .then(function (response) {
        temp = response?.data;
      });
    set_total_vendor(temp.data[0].user);
  };
  const getUsers = async () => {
    await axios
      .get("http://localhost:7000/user/users/user")
      .then(function (response) {
        temp = response?.data;
      });
    set_total_user(temp.data[0].user);
  };
  const getUsers_in_month = async () => {
    await axios
      .get("http://localhost:7000/user/get_user_month/user")
      .then(function (response) {
        temp = response?.data;
      });
    set_month_user(temp.data[0].user);
  };
  const getVendor_in_month = async () => {
    await axios
      .get("http://localhost:7000/user/get_user_month/vendor")
      .then(function (response) {
        temp = response?.data;
      });
    set_month_vendor(temp.data[0].user);
  };

  useEffect(() => {
    getVendor();
    getUsers();
    getVendor_in_month();
    getUsers_in_month();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Label
        title="Total No. of Vendors"
        number={total_vendor ? total_user : "0"}
        percentage="20%"
        duration="Since last month"
      />
      <Label
        title="Total No. of Users"
        number={total_user ? total_user : "0"}
        percentage="20%"
        duration="Since last month"
      />

      <Label
        title="Revenue Genetrated"
        number="800"
        percentage="20%"
        duration="Since last month"
      />
      <Label
        title="New Vendors"
        number={month_vendor ? month_vendor : "0"}
        percentage="20%"
        duration="Since last month"
      />
      <Label
        title="New Users"
        number={month_user ? month_user : "0"}
        percentage="20%"
        duration="Since last month"
      />
    </div>
  );
}

export default LabelCards;
