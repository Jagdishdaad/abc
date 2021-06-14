import React from "react";
import CRMTable from "../Components/CRMTable/CRMTable.js";
import { makeStyles } from "@material-ui/core/styles";

const columns = [
  { id: "product", label: "Product", align: "center" },
  { id: "requestby", label: "Request By", align: "center" },
  {
    id: "vendor",
    label: "Vendor",

    align: "center",
  },
  {
    id: "deliveryaddress",
    label: "Delivery Address",

    align: "center",
  },
  {
    id: "deliverydate",
    label: "Delivery Date",

    align: "center",
  },
  {
    id: "amount",
    label: "Amount",

    align: "center",
  },
  {
    id: "status",
    label: "Status",

    align: "center",
  },
];

function createData(
  product,
  requestby,
  vendor,
  deliveryaddress,
  deliverydate,
  amount,
  status
) {
  return {
    product,
    requestby,
    vendor,
    deliveryaddress,
    deliverydate,
    amount,
    status,
  };
}

const rows = [
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
  createData(
    "Cement",
    "XYZ",
    "XYZ",
    "Xyz Earth",
    "DD/MM/YY",
    "Rs 20000",
    "Pending"
  ),
];
const useStyles = makeStyles({
  root: {
    position: "absolute",
    width: "953px !important",
    left: "362px",
    height: "504px",
    top: "208px",
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
  },
  row: { height: "40 !important", padding: "0px 0px 0px" },
  footer: { color: "#F5F5F5" },
});

function VendorTable() {
  return (
    <div>
      <CRMTable columns={columns} rows={rows} useStyles={useStyles} />
    </div>
  );
}

export default VendorTable;
