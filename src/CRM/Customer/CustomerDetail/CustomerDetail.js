import { Button, Divider, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import ContactCard from "../../Components/ContactCard/ContactCard";
import CustomerOrder from "./CustomerOrder";
import CustomerOrderCard from "./CustomerOrderCard";
import axios from "axios";

function createOrderData(
  order,
  type,
  quantity,
  placedOn,
  deliveredBy,
  required,
  vendorName,
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
    vendorName,
    deliveryAddress,
    pitchAmount,
    pitchStatus,
    pitchDate,
    overDue,
  };
}

function CustomerDetail({ setIndex, val }) {
  const [customerDetail, setCustomerDetail] = useState({
    name: "",
    companyName: "",
    emailId: "",
    phoneNum: "",
    whatsappNum: "",
    address: "",
  });
  const [customerOrders, setCustomerOrders] = useState([]);
  const [orderId, setOrderId] = useState(0);
  let temp;
  let temp1;
  let temparr = [];

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7000/user/view_customer/${val}`
      );

      temp = response?.data;

      console.log(temp);

      setCustomerDetail({
        ...customerDetail,
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
            temp.data[i].placed_on.slice(0, 10),
            temp.data[i].deliver_by.slice(0, 10),
            temp.data[i].urgent,
            temp.data[i].vendor_name,
            objadd.add_title,
            temp.data[i].pitch_value,
            temp.data[i].product_status,
            temp.data[i].updated_at.slice(0, 10),
            temp.data[i].overdue
          )
        );
      }

      setCustomerOrders(temparr);

      console.log(customerOrders);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "90%",
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
            lineHeight: "2vw",
            color: "#FFFFFF",
            marginBottom: "8%",
          }}
        >
          Customer Details
        </Typography>
        <ContactCard details={customerDetail} />
        <Button
          style={{
            marginTop: "150%",
            width: "10vw",
            height: "3vw",
            background: "#FFB600",
            borderRadius: "0.5vw",
            textTransform: "unset",
            marginLeft: "30%",
          }}
        >
          Block Customer
        </Button>
      </div>
      <Divider
        orientation="vertical"
        light="true"
        style={{
          height: "100vh",
          backgroundColor: "#2D2D2D",
          width: "2px",
        }}
      />
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
            fontSize: "24px",
            lineHeight: "33px",
            color: "#FFFFFF",
            marginBottom: "24px",
          }}
        >
          Requests
        </Typography>
        <div
          style={{
            width: "22vw",
            maxHeight: "100vh",
            background: "#2D2D2D",
            color: "#FFFFFF",
            borderRadius: "0.5vw",
          }}
        >
          <div>
            {customerOrders.map((e, index) => (
              <CustomerOrder
                e={e}
                index={index}
                orderId={orderId}
                setOrderId={setOrderId}
              />
            ))}
          </div>
        </div>
      </div>
      <Divider
        orientation="vertical"
        light="true"
        style={{
          height: "100vh",
          backgroundColor: "#2D2D2D",
          width: "2px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <Close
          style={{
            fill: "#FFFFFF",
            marginLeft: "98%",
            cursor: "pointer",
            width: 30,
            height: 30,
          }}
          onClick={() => setIndex(8)}
        />

        <CustomerOrderCard
          details={customerOrders[orderId] ? customerOrders[orderId] : ""}
          key={orderId}
        />
      </div>
    </div>
  );
}

export default CustomerDetail;
