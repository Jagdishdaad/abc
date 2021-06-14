import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./TopProduct.css";

function createData(name, sales) {
  return { name, sales };
}

const rows = [
  createData("Cement", 31000),
  createData("Crane", 30000),
  createData("Bricks", 29000),
  createData("Cemente", 31000),
  createData("Crane", 30000),
  createData("Bricks", 29000),
  createData("Cement", 31000),
];

function TopProduct() {
  return (
    <div>
      <TableContainer component={Paper} className="Tablestyle">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow
              style={{
                border: "1px solid #121417",

                borderRadius: "4px 4px 0px 0px",
              }}
            >
              <TableCell
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "25px",
                  letterSpacing: "0.4px",
                  color: "#FFFFFF",
                  paddingTop: "17px",
                  paddingBottom: "17px",
                }}
              >
                Top Product
              </TableCell>
              <TableCell
                style={{
                  color: "#FFFFFF",
                  paddingTop: "17px",
                  paddingBottom: "17px",
                }}
              >
                (Month)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "19px",
                    letterSpacing: "0.4px",
                    color: "#FFFFFF",
                    border: "1px solid #121417",
                    boxSizing: "border-box",
                    borderRight: "0",
                    paddingTop: "18px",
                    paddingBottom: "18px",
                    borderRadius: "4px 4px 0px 0px",
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "19px",
                    letterSpacing: "0.4px",
                    color: "#FFFFFF",
                    border: "1px solid #121417",
                    boxSizing: "border-box",
                    borderLeft: "0",
                    paddingTop: "18px",
                    paddingBottom: "18px",
                    borderRadius: "4px 4px 0px 0px",
                  }}
                >
                  {row.sales}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TopProduct;
