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
import { Typography } from "@material-ui/core";
const columns = [
  { id: "product", label: "Product", align: "center" },
  { id: "service", label: "Service", align: "center" },
  {
    id: "date",
    label: "Date(product)",

    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "admin",
    label: "Admin",

    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "sales",
    label: "Sales till date",

    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",

    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(product, service, date, admin, sales, action) {
  return { product, service, date, admin, sales, action };
}

const rows = [
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
  createData(
    "Cement",
    "Construction Materials",
    "01May 2021",
    "Admin1",
    "25000"
  ),
];

const useStyles = makeStyles({
  root: {
    position: "absolute",
    width: "1028px !important",
    left: "346px",
    height: "504px",
    top: "1625px",
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

  heading: {
    position: "absolute",
    width: "372.84px",
    height: "33px",
    // left: "368px",
    // top: "1618px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "33px",
    /* identical to box height */

    letterSpacing: "0.4px",

    /* White */

    color: "#FFFFFF",
  },
});

function ProductList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Typography className={classes.heading}>Product List</Typography>
        <TablePagination
          rowsPerPageOptions={[]}
          //   rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          className={classes.footer}
          onChangePage={handleChangePage}
        />
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
      </Paper>
    </div>
  );
}

export default ProductList;
