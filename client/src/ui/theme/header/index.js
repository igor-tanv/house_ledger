import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 8,
  },
}));

export default function Header() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography variant="h6" className={classes.title}>
          Royal Ledger of the Seabass
        </Typography>
        <Toolbar>

          <ButtonGroup
            variant='contained'
            color='secondary'
            size='small'>
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
              }}
            >
              Main Ledger
            </Button>
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/short';
              }}
            >
              Open Short Ledgers
            </Button>
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/short/new';
              }}
            >
              New Short Ledger
            </Button>
          </ButtonGroup>

        </Toolbar>
      </AppBar>
    </div>
  );
}







// import React from 'react';
// import { Button, ButtonGroup } from '@material-ui/core';

// export default function Header() {
//   return <div className='header-container'>
    // <ButtonGroup
    //   variant='contained'
    //   color='primary'
    //   size='small'>

    //   <Button
    //     type="button"
    //     onClick={(e) => {
    //       e.preventDefault();
    //       window.location.href = '/';
    //     }}
    //   >
    //     Main Ledger
    //   </Button>
    //   <Button
    //     type="button"
    //     onClick={(e) => {
    //       e.preventDefault();
    //       window.location.href = '/short';
    //     }}
    //   >
    //     Open Short Ledgers
    //   </Button>
    //   <Button
    //     type="button"
    //     onClick={(e) => {
    //       e.preventDefault();
    //       window.location.href = '/short/new';
    //     }}
    //   >
    //     New Short Ledger
    //   </Button>
    // </ButtonGroup>
//   </div>
// }