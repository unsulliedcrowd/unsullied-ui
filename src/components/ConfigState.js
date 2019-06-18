import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';
import * as  JSONPrettyMon from 'react-json-pretty/dist/1337';

class ConfigState extends React.Component {
  static propTypes =  {
    state: PropTypes.any
  }

  constructor({ state }) {
    super();
    // console.log('Making ConfigState:', state);
    this.state = state;
  }

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <JSONPretty className={"json-pretty"} theme={JSONPrettyMon} data={this.state}></JSONPretty>
      </React.Fragment>
    );
  }
}

export default ConfigState;
