import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { PlayCircleFilledWhite } from '@material-ui/icons';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    minHeight: 440,
    border: '1px solid white',
 /*    color: PlayCircleFilledWhite, */
  },
});

function createData(product, quantity, requsted_by, status, vendor, amount, action ) {
  return { product, quantity, requsted_by, status, vendor, amount, action };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,8,8),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,8,9),
  createData('Eclair', 262, 16.0, 24, 6.0,9,9),
  createData('Cupcake', 305, 3.7, 67, 4.3,7,9),
  createData('Gingerbread', 356, 16.0, 49, 3.9,7,7),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{backgroundColor:'transparent', width:'100%', alignItems:'center'}}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow >
            <TableCell style={{color:'white',border:'1px solid white'}}>Product</TableCell>
            <TableCell style={{color:'white',border:'1px solid white'}}>Quantity</TableCell>
            <TableCell style={{color:'white',border:'1px solid white'}}>Requsted By</TableCell>
            <TableCell style={{color:'white',border:'1px solid white'}}>Status</TableCell>
            <TableCell style={{color:'white',border:'1px solid white'}}>Vendor</TableCell>
            <TableCell style={{color:'white',border:'1px solid white'}}>Amount</TableCell>
            <TableCell style={{color:'white',border:'1px solid white'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.product}>
              <TableCell component="th" scope="row" style={{color:'white',border:'1px solid white'}}>
                {row.product}
              </TableCell>
              <TableCell style={{color:'white',border:'1px solid white'}}>{row.quantity}</TableCell>
              <TableCell style={{color:'white',border:'1px solid white'}}>{row.requsted_by}</TableCell>
              <TableCell style={{color:'white',border:'1px solid white'}}>{row.status}</TableCell>
              <TableCell style={{color:'white',border:'1px solid white'}}>{row.vendor}</TableCell>
              <TableCell style={{color:'white',border:'1px solid white'}}>{row.amount}</TableCell>
              <TableCell style={{color:'white',border:'1px solid white'}}>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}