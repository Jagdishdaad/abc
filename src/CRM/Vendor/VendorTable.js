import React, { useState, useEffect } from "react";
import CRMTable from "../Components/CRMTable/CRMTable.js";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const columns = [
  { id: "customer_name", label: "Customer", align: "center" },
  { id: "company_name", label: "Company", align: "center" },
  { id: "Location", label: "Location", align: "center" },
  { id: "Requests", label: "Requests", align: "center" },
  { id: "Completed_Requests", label: "Completed Deals", align: "center" },
  { id: "actions", label: "Actions", align: "center" },
];

function createData(
  id,
  Completed_Requests,
  Location,
  Requests,
  company_name,
  customer_name
) {
  return {
    id,
    Completed_Requests,
    Location,
    Requests,
    company_name,
    customer_name,
  };
}

const useStyles = makeStyles({
  root: {
    width: "70vw!important",
    marginTop: "2%",

    background: "#121417 !important",
    boxSizing: "border-box",
  },
  container: {
    borderTop: "1px solid #F5F5F5",
    borderBottom: "1px solid #F5F5F5",
  },
  headrow: {
    height: "41px !important",
    borderBottom: "1px solid #F5F5F5",
    backgroundColor: "#121417 !important",
    padding: "0px 0px 0px",
  },
  headcolumn: {
    color: "#F5F5F5",
    borderLeft: "1px solid #F5F5F5",
    borderRight: "1px solid #F5F5F5",
  },
  column: {
    color: "#F5F5F5",
    padding: "10.5px 0px",
    width: "5px",
    borderLeft: "1px solid #F5F5F5",
    borderRight: "1px solid #F5F5F5",
    borderBottom: "none",
  },
  row: { height: "40 !important", padding: "0px 0px 0px" },
  footer: { color: "#F5F5F5" },
});

function VendorTable({ setIndex, setId }) {
  const [rows, setrows] = useState([]);
  let temp;
  let temparr = [];

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/user/customer_table"
        );

        temp = response?.data;
        for (var i = 0; i < temp.data.length; i++) {
          temparr.push(
            createData(
              temp.data[i].id,
              temp.data[i].Completed_Requests,
              temp.data[i].Location,
              temp.data[i].Requests,
              temp.data[i].company_name,
              temp.data[i].customer_name
            )
          );
        }
        setrows(temparr);
      } catch (e) {
        console.log(e);
      }
    };
    fetchVendors();
  }, []);
  return (
    <div>
      <CRMTable
        columns={columns}
        rows={rows}
        useStyles={useStyles}
        setIndex={setIndex}
        value={72}
        setId={setId}
      />
    </div>
  );
}

export default VendorTable;
