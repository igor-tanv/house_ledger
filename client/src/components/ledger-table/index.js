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

import './styles.css'

const useStyles = makeStyles({
  table: {
    maxWidth: 750,
  }
});


export default function LedgerTable({ props, users }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Who</TableCell>
            <TableCell align="right">What</TableCell>
            <TableCell align="right">When</TableCell>
            <TableCell align="right">How Much</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.map((row) => (
            <TableRow key={row.user}>
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
