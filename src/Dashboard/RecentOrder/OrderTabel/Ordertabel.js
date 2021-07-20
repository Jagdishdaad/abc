import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import axios from "axios";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: "3%",
    border: "1px solid white",
  },
  footer: {
    color: "#FFFFFF",
    // border: "1px solid white",
    // borderTop: "0px !important",
  },
});

function createData(
  product,
  quantity,
  requsted_by,
  status,
  vendor,
  amount,
  action
) {
  return { product, quantity, requsted_by, status, vendor, amount, action };
}

export default function DenseTable({ filterIndex }) {
  const [rows, setrows] = useState([]);
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 4;
  const classes = useStyles();

  const get_recent_order = async () => {
    let temp;
    let temparr = [];
    await axios
      .get(`http://localhost:7000/user${filterIndex}`)
      .then(function (response) {
        temp = response?.data;
      });
    console.log(temp);
    for (var i = 0; i < temp.data.length; i++) {
      temparr.push(
        createData(
          temp.data[i].type,
          temp.data[i].quantity,
          temp.data[i].requested_by,
          temp.data[i].statusofProduct,
          temp.data[i].vendor_name,
          temp.data[i].AMOUNT
        )
      );
    }
    setrows(temparr);
  };

  useEffect(() => {
    get_recent_order();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: "transparent",
        width: "98%",
        marginLeft: "0.5%",
        alignItems: "center",
      }}
    >
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "white", border: "1px solid white" }}>
              Product
            </TableCell>
            <TableCell style={{ color: "white", border: "1px solid white" }}>
              Quantity
            </TableCell>
            <TableCell style={{ color: "white", border: "1px solid white" }}>
              Requsted By
            </TableCell>
            <TableCell style={{ color: "white", border: "1px solid white" }}>
              Status
            </TableCell>
            <TableCell style={{ color: "white", border: "1px solid white" }}>
              Vendor
            </TableCell>
            <TableCell style={{ color: "white", border: "1px solid white" }}>
              Amount
            </TableCell>
            <TableCell style={{ color: "white", border: "1px solid white" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.product ? row.product : ""}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ color: "white", border: "1px solid white" }}
                >
                  {row.product ? row.product : "-"}
                </TableCell>
                <TableCell
                  style={{ color: "white", border: "1px solid white" }}
                >
                  {row.quantity ? row.quantity : "-"}
                </TableCell>
                <TableCell
                  style={{ color: "white", border: "1px solid white" }}
                >
                  {row.requsted_by ? row.requsted_by : "-"}
                </TableCell>
                <TableCell
                  style={{ color: "white", border: "1px solid white" }}
                >
                  {row.status ? row.status : "-"}
                </TableCell>
                <TableCell
                  style={{ color: "white", border: "1px solid white" }}
                >
                  {row.vendor ? row.vendor : "-"}
                </TableCell>
                <TableCell
                  style={{ color: "white", border: "1px solid white" }}
                >
                  {row.amount ? row.amount : "-"}
                </TableCell>
                <TableCell
                  style={{ color: "white", border: "1px solid white" }}
                >
                  <Typography>View</Typography>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        className={classes.footer}
        onChangePage={handleChangePage}
      />
    </TableContainer>
  );
}
