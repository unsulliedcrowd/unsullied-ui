import React from 'react';
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

import WorkerState from '../components/WorkerState';

const STATE_PROPS_QUERY = `
{
  isOnline
  currentTask {
    taskType
    taskParams
    interfaceType
    interfaceParams
    resultType
    resultParams
  }
}`;

const REGISTER_WORKER_QUERY = gql`
  mutation Worker($name: String!) {
    registerWorker(name: $name) {
      profile {
        id
      }
    }
  }
`;

const STATE_QUERY = gql`
  query WorkerState($workerId: ID!) {
    workerState(workerId: $workerId) ${STATE_PROPS_QUERY}
  }
`;

const STATE_SUBSCRIPTION = gql`
  subscription WorkerState($workerId: ID!) {
    workerState(workerId: $workerId) ${STATE_PROPS_QUERY}
  }
`;

class WorkerStateData extends React.Component {
  constructor() {
    super();
    this.state = {
      didSubscribe: false,
      isRegistering: false,
      didRegister: false,
      workerId: null
    };
  }

  _subscribeToState(subscribeToMore) {
    subscribeToMore({
      document: STATE_SUBSCRIPTION,
      variables: { workerId: this.state.workerId },
      updateQuery: (prev, { subscriptionData }) => {
        // debugger;
        const res = Object.assign({}, prev, { workerState: subscriptionData.data.currentState });
        // this.setState();
        return res;
      }
    })
  }

  render() {
    return <span>
      <Mutation mutation={REGISTER_WORKER_QUERY}>
        {(registerWorker, { loading, error }) => {
          if (loading) return <div>Registering worker...</div>;
          if (error) return <div>Registration error.</div>;

          if (!this.state.isRegistering && !this.state.didRegister) {
            this.setState({ isRegistering: true });
            registerWorker({ variables: { name: "Steffan" } })
              .then(({ data }) => {
                const workerId = data.registerWorker.profile.id;
                this.setState({ workerId, didRegister: false, isRegistering: true});
              });
            return <div>Starting worker registration...</div>;
          }

          // if (data && !this.state.isRegistering && this.state.didRegister) {
          //   console.log('workerId', workerId);
          // }

          return <div>Worker registered!</div>;
        }}
      </Mutation>

      {this.state.workerId &&
        <Query
        query={STATE_QUERY}
        variables={{ workerId: this.state.workerId }}
        >

        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          if (!this.state.didSubscribe) {
            this._subscribeToState(subscribeToMore);
            this.setState({ didSubscribe: true });
          }
          // this.setState({ currentState: data.currentState });

          // console.log('Subscribe:', data);

          return <WorkerState state={data.workerState} />;
          // data.currentState
        }}

        </Query>
      }

    </span>;
  }
}

export default WorkerStateData;

// <Query
//   query={REGISTER_WORKER_QUERY}
//   variables={{}}
// >
// {({ loading, error, data }) => {
//   if (loading) return <div>Fetching</div>;
//   if (error) return <div>Error</div>;
//
//   if (!this.state.didSubscribe) {
//     this._subscribeToState(subscribeToMore);
//     this.setState({ didSubscribe: true });
//   }
//   // this.setState({ currentState: data.currentState });
//
//   return <div>{JSON.stringify(data.currentState)}</div>;
//   // data.currentState
// }}
//
// </Query>
