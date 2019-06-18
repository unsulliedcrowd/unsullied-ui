import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { withApollo } from 'react-apollo';
import gql from "graphql-tag";

const SUBMIT_TASK_MUTATION = gql`
  mutation TaskResult($taskString: String!, $taskResultString: String!, $file: Upload) {
    submitTaskResult(taskString: $taskString, taskResultString: $taskResultString, file: $file) {
      isSubmitted
    }
  }
`;

class MicroTask extends React.Component {
  static propTypes =  {
    client: PropTypes.any,
    task: PropTypes.any
  }

  constructor({ task }) {
    super();
    // console.log('Making MicroTask:', task);
    this.state = task;
    this.file = null;
  }

  handleFileChange({ target: { validity, files: [file] } }) {
    console.log('Handling file change:', validity, file);
    if (validity.valid) this.file = file;
  }


  submitResult(e) {
    console.log('Submitting result!');
    e.preventDefault();

    const taskString = JSON.stringify(this.state);
    const taskResultString = JSON.stringify({ taskResult: "test2" });

    // const file = new Blob(["test content"], { type: 'text/plain' });
    // file.name = `test.txt`;

    this.props.client.mutate({
      mutation: SUBMIT_TASK_MUTATION,
      variables: { taskString, taskResultString, file: this.file },
    });
  }

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <form onSubmit={(...args) => this.submitResult(...args)}>
      {this.state.interfaceType === "QUESTION" && <Typography variant="h5" className="TaskQuestionInterface">{this.state.taskType} Task: {this.state.interfaceParams[0]}</Typography>}

      <input type="file" required onChange={(...args) => this.handleFileChange(...args)} />


      <Button type="submit" color="primary" variant="contained">Submit result!</Button>
      </form>
      </React.Fragment>
    );
  }
}

export default withApollo(MicroTask);

// {<div>{this.state.interfaceType} interface: {JSON.stringify(this.state.interfaceParams)}.</div>}
// {<div>{this.state.resultType} result: {JSON.stringify(this.state.resultParams)}.</div>}
