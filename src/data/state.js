import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const STATE_PROPS_QUERY = `
{
  currentTime
  config {
    schemaFile
  }

  crowd {
    stats {
      availableWorkersTotal
    }
  }

}`;

const STATE_QUERY = gql`
  query State {
    currentState ${STATE_PROPS_QUERY}
  }
`;

const STATE_SUBSCRIPTION = gql`
  subscription State {
    currentState ${STATE_PROPS_QUERY}
  }
`;

class CurrentState extends React.Component {
  constructor() {
    super();
    this.state = {
      didSubscribe: false
    };
  }

  _subscribeToState(subscribeToMore) {
    subscribeToMore({
      document: STATE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        // debugger;
        const res = Object.assign({}, prev, subscriptionData.data);
        // this.setState();
        return res;
      }
    })
  }

  render() {
    return <Query
      query={STATE_QUERY}
      variables={{}}
    >

    {({ loading, error, data, subscribeToMore }) => {
      if (loading) return <div>Fetching</div>;
      if (error) return <div>Error</div>;

      if (!this.state.didSubscribe) {
        this._subscribeToState(subscribeToMore);
        this.setState({ didSubscribe: true });
      }
      // this.setState({ currentState: data.currentState });

      return <div>{JSON.stringify(data.currentState)}</div>;
      // data.currentState
    }}

    </Query>;
  }
}

export default CurrentState;
