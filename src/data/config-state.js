import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import ConfigState from '../components/ConfigState';

const STATE_PROPS_QUERY = `
{
  schemaFile
  taskGenerationConfig {
    initialLocation
  }
}`;


const STATE_QUERY = gql`
  query ConfigState {
    configState ${STATE_PROPS_QUERY}
  }
`;

const STATE_SUBSCRIPTION = gql`
  subscription ConfigState {
    configState ${STATE_PROPS_QUERY}
  }
`;

class ConfigStateData extends React.Component {
  constructor() {
    super();
    this.state = {
      didSubscribe: false
    };
  }

  _subscribeToState(subscribeToMore) {
    subscribeToMore({
      document: STATE_SUBSCRIPTION,
      variables: { },
      updateQuery: (prev, { subscriptionData }) => {
        // debugger;
        const res = Object.assign({}, prev, { configState: subscriptionData.data });
        // this.setState();
        return res;
      }
    })
  }

  render() {
    return <span>
      {<Query
        query={STATE_QUERY}
        variables={{  }}
        >

        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          if (!this.state.didSubscribe) {
            this._subscribeToState(subscribeToMore);
            this.setState({ didSubscribe: true });
          }
          // this.setState({ currentState: data.currentState });

          console.log('Subscribe:', data);

          return <ConfigState state={data.configState} />;
          // data.currentState
        }}

        </Query>
      }

    </span>;
  }
}

export default ConfigStateData;
