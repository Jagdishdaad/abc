import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./TopProduct.css";
import axios from "axios";

function createData(type, count) {
  return { type, count };
}

function TopProduct() {
  let temp;
  let temparr = [];
  const [topP, settopP] = useState([]);
  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/user/top_product_month"
        );
        temp = response?.data;
        for (var i = 0; i < temp.data.length; i++) {
          temparr.push(createData(temp.data[i].type, temp.data[i].count));
        }
        settopP(temparr);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTopProducts();
  }, []);

  return (
    <div>
      <TableContainer component={Paper} className="Tablestyle">
        <Table aria-label="simple table">
          <TableHead style={{ border: "0.2vw solid #121417" }}>
            <TableRow
              style={{
                border: "0.1vw solid #121417 !important",

                borderRadius: "0.2vw 0.2vw 0vh 0vh",
              }}
            >
              <TableCell
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  lineHeight: "1vw",
                  letterSpacing: "0.04vw",
                  color: "#FFFFFF",
                  // paddingTop: "3vh",
                  // paddingBottom: "3vh",
                }}
              >
                Top Product
              </TableCell>
              <TableCell
                style={{
                  color: "#FFFFFF",
                  // paddingTop: "3vh",
                  // paddingBottom: "3vh",
                }}
              >
                (Month)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topP?.map((temp) => (
              <TableRow
                key={temp?.type}
                style={{ border: "0.2vw solid #121417" }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "1rem",
                    lineHeight: "1vw",
                    letterSpacing: "0.04vw",
                    color: "#FFFFFF",

                    boxSizing: "border-box",
                    borderRight: "0",
                    // paddingTop: "2.7vh",
                    // paddingBottom: "2.7vh",
                    borderRadius: "0.2vw 0.2vw 0vh 0vh",
                  }}
                >
                  {temp?.type}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "1rem ",
                    lineHeight: "2vw",
                    letterSpacing: "0.04vw",
                    color: "#FFFFFF",

                    boxSizing: "border-box",
                    borderLeft: "0",
                    // paddingTop: "2.7vh",
                    // paddingBottom: "2.7vh",
                    borderRadius: "0.2vw 0.2vw 0vh 0vh",
                  }}
                >
                  {temp?.count}
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
