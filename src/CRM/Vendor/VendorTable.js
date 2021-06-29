import React from "react";
import CRMTable from "../Components/CRMTable/CRMTable.js";
import { makeStyles } from "@material-ui/core/styles";

const columns = [
  { id: "vendor", label: "Vendor", align: "center" },
  { id: "company", label: "Company", align: "center" },
  { id: "location", label: "Location", align: "center" },
  { id: "leads", label: "Leads", align: "center" },
  { id: "noofservices", label: "No. Of Services", align: "center" },
  { id: "actions", label: "Actions", align: "center" },
];

function createData(vendor, company, location, leads, noofservices, actions) {
  return {
    vendor,
    company,
    location,
    leads,
    noofservices,
    actions,
  };
}

const rows = [
  createData("XYZ", "XYZ", "Xyz Earth", "25 Leads", "10"),
  createData("XYZ", "XYZ", "Xyz Earth", "25 Leads", "10"),
  createData("XYZ", "XYZ", "Xyz Earth", "25 Leads", "10"),
  createData("XYZ", "XYZ", "Xyz Earth", "25 Leads", "10"),
  createData("XYZ", "XYZ", "Xyz Earth", "25 Leads", "10"),
  createData("XYZ", "XYZ", "Xyz Earth", "25 Leads", "10"),
  createData("XYZ", "XYZ", "Xyz Earth", "25 Leads", "10"),
  createData("XYZ", "XYZ", "Xyz Earth", "25 Leads", "10"),
  createData("XYZ", "XYZ", "Xyz Earth", "25 Leads", "10"),
  createData("XYZ", "XYZ", "Xyz Earth", "25 Leads", "10"),
  createData("XYZ", "XYZ", "Xyz Earth", "25 Leads", "10"),
];
const useStyles = makeStyles({
  root: {
    width: "953px !important",
    marginTop: "2%",
    height: "504px",

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

function VendorTable({ setIndex }) {
  return (
    <div>
      <CRMTable
        columns={columns}
        rows={rows}
        useStyles={useStyles}
        setIndex={setIndex}
        value={72}
      />
    </div>
  );
}

export default VendorTable;
