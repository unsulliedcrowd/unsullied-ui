import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'; // v1.x
import {
  AppBar,
  Button,
  Drawer,
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
} from '@material-ui/core';
// import Drawer from '@material-ui/core/Drawer';
// import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';


import './App.css';

// const logo = require('./logo.svg');
// type State = {
//   open?: boolean,
//   logged?: boolean
// };
const baseTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false,
      logged: false
    };
  }

  login = () => {
    this.setState({ logged: true });
  }

  logout = () => {
    this.setState({ logged: false });
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={baseTheme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className="MenuIconButton" color="inherit" aria-label="Menu" onClick={this.toggleMenu}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className="TitleBar">
                Unsullied
              </Typography>
              {this.state.logged ?  <Button onClick={this.logout}>Logout</Button> : <Button onClick={this.login}>Login</Button>}

            </Toolbar>
          </AppBar>

          <Drawer open={this.state.open} docked={false} onBackdropClick={this.toggleMenu}>
            <img src={logo} className="App-logo" alt="logo" />
            <MenuItem className="MenuItem">Home</MenuItem>
            <MenuItem className="MenuItem">Other places</MenuItem>
          </Drawer>


        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
