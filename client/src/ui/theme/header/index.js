import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

export default function Header() {
  return <div className='header-container'>
    <ButtonGroup
      variant='contained'
      color='primary'>
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
  </div>
}