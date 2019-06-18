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
import CssBaseline from '@material-ui/core/CssBaseline';

import logo from './logo.svg';
import './App.css';

import { Route, Link } from "react-router-dom";

import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

// App specific imports
import Hello from './routes/Hello';
import ConfigRoute from './routes/Config';
import Dashboard from './routes/Dashboard';
import WorkerUI from './routes/WorkerUI';

import Config from './Config';

// import ApolloClient, {createNetworkInterface} from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { createUploadLink } from 'apollo-upload-client';

import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Create regular NetworkInterface by using apollo-client's API:
const httpLink = new HttpLink({
  uri: Config.API_URI,
  options: {
    path: '/'
  }
});

// Create WebSocket client
const wsLink = new WebSocketLink({
    uri: Config.API_URI.replace('http', 'ws'),
    options: {
      reconnect: true,
      timeout: 30000,
      connectionParams: {
        // Pass any arguments you want for initialization
      }
    }
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    console.log(definition.operation);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  createUploadLink({
    uri: Config.API_URI,
    options: {
      path: '/'
    }
  }),
  // httpLink,
);
const cache = new InMemoryCache();


// Extend the network interface with the WebSocket
// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//     networkInterface,
//     wsClient
// );

// Finally, create your ApolloClient instance with the modified network interface
const client = new ApolloClient({
    link: link,
    cache
});

// const client = new ApolloClient({
//   uri: Config.API_URI
// });

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
      "Dashboard": '/',
      "Config": '/config',
      "Worker UI": '/worker-ui',
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
      return <MenuItem className="MenuItem" onClick={() => this.selectMenuItem(key)} component={LinkComponent} key={key}>{key}</MenuItem>;
    });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={baseTheme}>
          <CssBaseline />
          <ApolloProvider client={client}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className="MenuIconButton" color="inherit" aria-label="Menu" onClick={this.toggleMenu}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className="TitleBar">
                  UnsulliedKnowledge
                </Typography>
                {this.state.logged ?  <Button variant="contained" color="secondary" onClick={this.logout}>Logout</Button> : <Button variant="contained" onClick={this.login}>Login</Button>}

              </Toolbar>
            </AppBar>

            <Drawer open={this.state.open} docked={"false"} onBackdropClick={this.toggleMenu}>
              <img src={logo} className="App-logo" alt="logo" />
              {this.createMenu()}
            </Drawer>

            <Route exact path='/' component={Dashboard}/>
            <Route path='/config' component={ConfigRoute}/>
            <Route path='/worker-ui' component={WorkerUI}/>
          </ApolloProvider>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
