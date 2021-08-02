import React from "react";
import Header from "./header";
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';



const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  color: '#ba000d',
});


export default function Theme({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <div className={theme.color}>{children}</div>
    </MuiThemeProvider>
  );
}