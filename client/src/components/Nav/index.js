import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./style.css";
import logo from "./relaylogo.png";

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#257DC8'
    }
  }
});

export default function Nav() {

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">
          <a className="navbar-brand" href="/"><img src={logo} alt="logo" style={{width: 180}} /></a>
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
