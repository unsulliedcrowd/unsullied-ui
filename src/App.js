import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
import {
  AppBar,
  Button,
  Drawer,
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import logo from './logo.svg';
import './App.css';

import { Route, Link } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// App specific imports
import Hello from './routes/Hello';
import Dashboard from './routes/Dashboard';

import Config from './Config';


const client = new ApolloClient({
  uri: Config.API_URI
});

const baseTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends React.Component {
  constructor() {
    super();

    // Set initial state
    this.state = {
      open: false,
      logged: false,
      selectedMenuItem: null
    };

    this.menuItems = {
      "Home": '/',
      "Dashboard": '/dashboard',
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

  closeMenu = () => {
    this.setState({ open: false });
  }

  selectMenuItem = (key) => {
    this.setState({ selectedMenuItem: key });
    this.closeMenu();
  }

  createMenu = () => {
    return Object.entries(this.menuItems).map(([key, value]) => {
      const LinkComponent = React.forwardRef((props, ref) => <Link innerRef={ref} to={value} {...props}>{key}</Link>);
      return <MenuItem className="MenuItem" onClick={() => this.selectMenuItem(key)} component={LinkComponent}>{key}</MenuItem>;
    });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={baseTheme}>
          <ApolloProvider client={client}>
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
              {this.createMenu()}
            </Drawer>

            <Route exact path='/' component={Hello}/>
            <Route path='/dashboard' component={Dashboard}/>
          </ApolloProvider>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
