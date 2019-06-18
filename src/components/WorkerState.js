import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';
import * as  JSONPrettyMon from 'react-json-pretty/dist/1337';

import MicroTask from '../components/MicroTask';

class WorkerState extends React.Component {
  static propTypes =  {
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
      <JSONPretty className={"json-pretty"} theme={JSONPrettyMon} data={this.state}></JSONPretty>
      {this.state.currentTask && <MicroTask task={this.state.currentTask} />}
      </React.Fragment>
    );
  }
}

export default WorkerState;
