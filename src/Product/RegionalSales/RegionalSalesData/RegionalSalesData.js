import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./RegionSalesData.css";

function createData(name, sales, color) {
  return { name, sales, color };
}

const rows = [
  createData("Maharastra", 31000, "red"),
  createData("Gujarat", 30000, "white"),
  createData("Utter Pradesh", 29000, "green"),
  createData("Andhra Pradesh", 31000, "blue"),
];

function RegionalSalesData() {
  return (
    <div>
      <TableContainer component={Paper} className="Tablestyle1">
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                style={{
                  backgroundColor: row.color,
                  borderBottom: "none !important",
                }}
              >
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RegionalSalesData;
