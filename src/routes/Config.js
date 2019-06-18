import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ConfigStateData from '../data/config-state';

class Dashboard extends React.Component {
  // componentDidMount() {
  //   this._subscribeToState();
  // }

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
      <Typography variant="h6" className="TitleBar">
      Config
      </Typography>

      <ConfigStateData subscribeToState={this._subscribeToState} />
      </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
