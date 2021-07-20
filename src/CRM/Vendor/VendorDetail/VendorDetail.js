import { Button, Card, Divider, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import ContactCard from "../../Components/ContactCard/ContactCard";
import VendorService from "./VendorService";
import VendorServiceCard from "./VendorServiceCard";
import axios from "axios";

function createOrderData(
  order,
  type,
  quantity,
  placedOn,
  deliveredBy,
  required,
  customerName,
  deliveryAddress,
  pitchAmount,
  pitchStatus,
  pitchDate,
  overDue
) {
  return {
    order,
    type,
    quantity,
    placedOn,
    deliveredBy,
    required,
    customerName,
    deliveryAddress,
    pitchAmount,
    pitchStatus,
    pitchDate,
    overDue,
  };
}
function createServiceData(service, type, updatedAt) {
  return { service, type, updatedAt };
}

function VendorDetail({ setIndex }) {
  const [vendorDetail, setVendorDetail] = useState({
    name: "",
    companyName: "",
    emailId: "",
    phoneNum: "",
    whatsappNum: "",
    address: "",
  });
  let temp;
  let temparr = [];
  let temparr1 = [];
  const [vendorOrders, setVendorOrders] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  const fetchVendors = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7000/user/view_vendor/23`
      );
      temp = response?.data;
      console.log(temp.data);
      setVendorDetail({
        ...vendorDetail,
        name: temp.data[0].first_name,
        companyName: temp.data[0].company_name,
        emailId: temp.data[0].email,
        phoneNum: temp.data[0].phone_no,
        whatsappNum: temp.data[0].whatsapp_no,
        address: temp.data[0].city,
      });

      for (var i = 0; i < temp.data.length; i++) {
        let objadd = JSON.parse(temp.data[i].delivery_address);

        let objtype = JSON.parse(temp.data[i].data);
        let joinedtype;
        {
          joinedtype =
            objtype === null ? null : Object.values(objtype).join(" ");
        }
        temparr.push(
          createOrderData(
            temp.data[i].type,
            joinedtype,
            temp.data[i].quantity,
            temp.data[i].placed_on?.slice(0, 10),
            temp.data[i].deliver_by?.slice(0, 10),
            temp.data[i].urgent,
            temp.data[i].customer_name,
            objadd.add_title,
            temp.data[i].pitch_value,
            temp.data[i].product_status,
            temp.data[i].updated_at?.slice(0, 10),
            temp.data[i].overdue
          )
        );
      }

      setVendorOrders(temparr);

      console.log(vendorOrders);
    } catch (e) {
      console.log(e);
    }
  };
  const fetchServices = async () => {
    const response = await axios.get(
      `http://localhost:7000/user/get_services/23`
    );
    temp = response?.data;

    for (var i = 0; i < temp.data.length; i++) {
      temparr1.push(
        createServiceData(
          temp.data[i].service_type,
          temp.data[i].type,
          temp.data[i].updated_at.slice(5, 10)
        )
      );
      setServiceData(temparr1);
      console.log(serviceData);
    }
  };
  useEffect(() => {
    fetchVendors();
    fetchServices();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        width: "103%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1.5%",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.8vw",
            lineHeight: "2.2vw",
            color: "#FFFFFF",
            marginBottom: "2vw",
          }}
        >
          Vendor Details
        </Typography>
        <ContactCard details={vendorDetail} />
        <Button
          style={{
            marginTop: "3000vw",
            width: "8vw",
            height: "3vw",
            background: "#FFB600",
            borderRadius: "0.5vw",
            textTransform: "unset",
            marginLeft: "30%",
          }}
        >
          Block Vendor
        </Button>
      </div>
      <Divider
        orientation="vertical"
        light="true"
        style={{
          height: "100vh",
          backgroundColor: "#2D2D2D",
          width: "0.15vw",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1.5vw",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.8vw",
            lineHeight: "2.2vw",
            color: "#FFFFFF",
            marginBottom: "2vw",
          }}
        >
          Services
        </Typography>
        <div
          style={{
            width: "100%",
            maxheight: "100vh",
            background: "#2D2D2D",
            borderRadius: "0.5vw",
            overflowY: "auto",
          }}
        >
          {serviceData.map((e, index) => (
            <VendorService details={e} index={index} />
          ))}
        </div>
      </div>
      <Divider
        orientation="vertical"
        light="true"
        style={{
          height: "100vh",
          backgroundColor: "#2D2D2D",
          width: "0.15vw",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", padding: "1vw" }}>
        <Close
          style={{
            fill: "#FFFFFF",
            cursor: "pointer",
            width: "2.5vw",
            height: "2.5vw",
            marginLeft: "87.5%",
          }}
          onClick={() => setIndex(7)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxHeight: "95vh",
            width: "42vw",
            borderRadius: "0.5vw",
            overflowY: "auto",
            marginTop: "5%",
          }}
        >
          {vendorOrders.map((e) => (
            <VendorServiceCard details={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VendorDetail;
