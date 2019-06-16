import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import WorkerState from '../data/worker-state';

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
      Worker UI
      </Typography>

      <WorkerState subscribeToState={this._subscribeToState} />
      </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
