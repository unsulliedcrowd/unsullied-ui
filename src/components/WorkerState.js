import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';
import * as  JSONPrettyMon from 'react-json-pretty/dist/1337';

import MicroTask from '../components/MicroTask';

class WorkerState extends React.Component {
  static propTypes =  {
    workerState: PropTypes.any,
    workerId: PropTypes.any
  }

  constructor({ workerId, workerState }) {
    super();
    // console.log('Making WorkerState:', state);
    this.state = {
      workerId,
      workerState
    }
  }

  componentWillReceiveProps(nextProps){
    // console.log("nextProps:", nextProps)
    if(nextProps.workerState && nextProps.workerState !== this.props.workerState){
        this.setState({workerState: nextProps.workerState});
    }
  }

  render() {
    let content;
    // console.log(this.state.workerState.currentTask);
    if (this.state.workerState.currentTask == null) {
      content = <div>Waiting for task to be assigned...</div>;
    } else {
      content = <MicroTask task={this.state.workerState.currentTask} workerId={this.state.workerId} />;
    }

    return (
      <React.Fragment>
      <CssBaseline />
      <JSONPretty className={"json-pretty"} theme={JSONPrettyMon} data={this.state.workerState}></JSONPretty>
      {content}
      </React.Fragment>
    );
  }
}

export default WorkerState;
