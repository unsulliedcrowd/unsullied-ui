import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import { Button } from '@material-ui/core';
import { withApollo } from 'react-apollo';
import gql from "graphql-tag";

const SUBMIT_TASK_MUTATION = gql`
  mutation TaskResult($workerId: ID!, $taskString: String!, $taskResultString: String!, $file: Upload) {
    submitTaskResult(workerId: $workerId, taskString: $taskString, taskResultString: $taskResultString, file: $file) {
      isSubmitted
    }
  }
`;

class MicroTask extends React.Component {
  static propTypes =  {
    client: PropTypes.any,
    task: PropTypes.any,
    workerId: PropTypes.any
  }

  constructor({ workerId, task }) {
    super();
    // console.log('Making MicroTask:', task);
    this.state = {
      workerId,
      task,
      file: null,
      fileUrl: null,
      submitted: false,
    }
  }

  handleFileChange({ target: { validity, files: [file] } }) {
    // console.log('Handling file change:', validity, file);
    if (validity.valid) {
      this.setState({ file: file, fileUrl: URL.createObjectURL(file) });
    }
  }


  submitResult(e) {
    // console.log('Submitting result!');
    e.preventDefault();

    const taskString = JSON.stringify(this.state.task);
    const taskResultString = JSON.stringify({ taskResult: "test2" });

    // const file = new Blob(["test content"], { type: 'text/plain' });
    // file.name = `test.txt`;

    this.props.client.mutate({
      mutation: SUBMIT_TASK_MUTATION,
      variables: { workerId: this.state.workerId, taskString, taskResultString, file: this.state.file },
      update: () => {
        this.setState({ submitted: true});
      }
    });

  }

  handleBooleanChange() {
    // setValue(event.target.value);
  }


  render() {
    let content;
    if (!this.state.submitted) {
      if (this.state.task.resultType === "IMAGE") {
        content = <form onSubmit={(...args) => this.submitResult(...args)}>
        <input type="file" required onChange={(...args) => this.handleFileChange(...args)} />
        {this.state.fileUrl && <img src={this.state.fileUrl} className="imagePreview" alt="file preview" />}
        <Button type="submit" color="primary" variant="contained">Submit result!</Button>
        </form>;

      } else if (this.state.task.resultType === "BOOLEAN") {
      const positive = "is full";
      const negative = "isn't full";

      content = <form onSubmit={(...args) => this.submitResult(...args)}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Label</FormLabel>
                    <RadioGroup
                      aria-label="Label"
                      name="gender1"
                      onChange={(...args) => this.handleBooleanChange(...args)}
                    >
                      <FormControlLabel value={positive} control={<Radio />} label={positive} />
                      <FormControlLabel value={negative} control={<Radio />} label={negative} />
                    </RadioGroup>
                  </FormControl>
                  <Button type="submit" color="primary" variant="contained">Submit result!</Button>
                </form>;
      }
    } else {
      content = <div>Task succesfully completed! Waiting for next task...</div>;
    }

    return (
      <React.Fragment>
      <CssBaseline />
      {this.state.task.interfaceType === "QUESTION" && <Typography variant="h5" className="TaskQuestionInterface">{this.state.task.taskType} Task: {this.state.task.interfaceParams[0]}</Typography>}

      {content}

      </React.Fragment>
    );
  }
}

export default withApollo(MicroTask);

// {<div>{this.state.task.interfaceType} interface: {JSON.stringify(this.state.task.interfaceParams)}.</div>}
// {<div>{this.state.task.resultType} result: {JSON.stringify(this.state.task.resultParams)}.</div>}
