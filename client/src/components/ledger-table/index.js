import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { usersToObject } from '../../modules/users-to-object'
import formatDate from '../../modules/format-date'

//import './styles.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 850,
  },
  table: {
    background: '#fffde7',
    tableLayout: 'fixed'

  },
});


export default function LedgerTable({ props, users }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table" border={2}>
        <TableHead>
          <TableRow>
            <TableCell>Who</TableCell>
            <TableCell align="right">What</TableCell>
            <TableCell align="right">When</TableCell>
            <TableCell align="right">How Much</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {usersToObject(users)[row.user]}
              </TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{formatDate(row.purchaseDate)}</TableCell>
              <TableCell align="right">{row.cost.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
