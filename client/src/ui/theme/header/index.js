import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

export default function Header() {

  return (
    <div >
      <AppBar position="relative">
        <Typography variant="h6" align='center'>
          SINO Ledger
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
              Active Short Ledgers
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