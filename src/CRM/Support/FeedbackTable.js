import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import FeedbackLabel from "./FeedbackLabel";
import { makeStyles } from "@material-ui/core/styles";
import FeedbackInput from "./FeedbackInput.js";
import FeedbackFilter from "./FeedbackFilter";

const useStyles = makeStyles({
  root: {
    background: "#121417 !important",
    boxSizing: "border-box",
  },

  footer: { color: "#F5F5F5" },
  row: { borderBottom: "1px solid black" },
});

function FeedbackTable({ rows }) {
  const [filterId, setFilterId] = useState(-1);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper className={classes.root}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "45%",
          marginBottom: "1.5%",
        }}
      >
        <FeedbackInput />
        <FeedbackFilter filterId={filterId} setFilterId={setFilterId} />

        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          className={classes.footer}
          onChangePage={handleChangePage}
        />
      </div>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow
              hover
              role="checkbox"
              tabIndex={-1}
              className={classes.row}
            >
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <FeedbackLabel
                    name={row.first_name}
                    feedback={row.feedback}
                    photo="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  />
                ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default FeedbackTable;
