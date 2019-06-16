import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { withApollo } from 'react-apollo';
import gql from "graphql-tag";

const SUBMIT_TASK_MUTATION = gql`
  mutation TaskResult($taskString: String!, $taskResultString: String!) {
    submitTaskResult(taskString: $taskString, taskResultString: $taskResultString) {
      isSubmitted
    }
  }
`;

class MicroTask extends React.Component {
  propTypes =  {
    client: PropTypes.any,
    task: PropTypes.any
  }

  constructor({ task }) {
    super();
    // console.log('Making MicroTask:', task);
    this.state = task;
  }

  submitResult() {
    // console.log('Submitting result!');
    const taskString = JSON.stringify(this.state);
    const taskResultString = JSON.stringify({ taskResult: "test2" });
    this.props.client.mutate({
      mutation: SUBMIT_TASK_MUTATION,
      variables: { taskString, taskResultString },
    });
  }

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Typography variant="h6" className="TitleBar">
        {this.state.taskType} Task!
      </Typography>

      {this.state.interfaceType === "QUESTION" && <div>Question interface: {JSON.stringify(this.state.interfaceParams)}.</div>}
      {this.state.resultType === "LABEL" && <div>Label result: {JSON.stringify(this.state.resultParams)}.</div>}

      <Button color="primary" variant="contained" onClick={() => this.submitResult()}>Submit result!</Button>

      </React.Fragment>
    );
  }
}

export default withApollo(MicroTask);
