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
                border: "0.1vh solid #121417",

                borderRadius: "0.4vh 0.4vh 0vh 0vh",
              }}
            >
              <TableCell
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  lineHeight: "2vh",
                  letterSpacing: "0.04vh",
                  color: "#FFFFFF",
                  paddingTop: "3vh",
                  paddingBottom: "3vh",
                }}
              >
                Top Product
              </TableCell>
              <TableCell
                style={{
                  color: "#FFFFFF",
                  paddingTop: "3vh",
                  paddingBottom: "3vh",
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
                    fontSize: "1rem",
                    lineHeight: "3vh",
                    letterSpacing: "0.04vh",
                    color: "#FFFFFF",
                    border: "0.1vh solid #121417",
                    boxSizing: "border-box",
                    borderRight: "0",
                    paddingTop: "2.7vh",
                    paddingBottom: "2.7vh",
                    borderRadius: "0.4vh 0.4vh 0vh 0vh",
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
                    fontSize: "1rem ",
                    lineHeight: "4vh",
                    letterSpacing: "0.04vh",
                    color: "#FFFFFF",
                    border: "0.1vh solid #121417",
                    boxSizing: "border-box",
                    borderLeft: "0",
                    paddingTop: "2.7vh",
                    paddingBottom: "2.7vh",
                    borderRadius: "0.4vh 0.4vh 0vh 0vh",
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
