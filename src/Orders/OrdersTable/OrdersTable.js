import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
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
    width: "100% !important",
    padding: "5vw",
    height: "50vw",
    background: "#121417 !important",
    boxSizing: "border-box",
  },
  container: { borderTop: "1px solid white", borderBottom: "1px solid white" },
  headrow: {
    height: "41px !important",
    borderBottom: "1px solid white",
    backgroundColor: "#121417 !important",
    padding: "0px 0px 0px",
  },
  headcolumn: {
    color: "white",
    borderLeft: "1px solid white",
    borderRight: "1px solid white",
  },
  column: {
    color: "white",
    padding: "10.5px 0px",
    width: "5px",
    borderLeft: "1px solid white",
    borderRight: "1px solid white",
  },
  row: { height: "40 !important", padding: "0px 0px 0px" },
  footer: { color: "white" },
});

function OrdersTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table>
            <TableHead className={classes.head}>
              <TableRow className={classes.headrow}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    className={classes.headcolumn}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      className={classes.row}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align="center"
                            className={classes.column}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          //   rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          className={classes.footer}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default OrdersTable;
