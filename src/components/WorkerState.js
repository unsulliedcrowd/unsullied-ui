import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';

import MicroTask from '../components/MicroTask';

class WorkerState extends React.Component {
  propTypes =  {
    state: PropTypes.any
  }

  constructor({ state }) {
    super();
    // console.log('Making WorkerState:', state);
    this.state = state;
  }

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      WorkerState: {JSON.stringify(this.state)}
      {this.state.currentTask && <MicroTask task={this.state.currentTask} />}
      </React.Fragment>
    );
  }
}

export default WorkerState;
