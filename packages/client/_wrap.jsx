import React from 'react';
import Wrap from '@airy/maleo/wrap';

import GraphQLClient from './gql-client';
import GraphQLClientContext from './gql-context';

const client = new GraphQLClient({
  baseURL: 'http://localhost:4000/graphql',
});

export default class CustomWrap extends Wrap {
  state = {
    refetches: {},
    setRefetch: (key, refetch) => {
      this.setState({
        refetches: {
          ...this.state.refetches,
          [key]: refetch,
        },
      });
    },
  };

  render() {
    const { refetches, setRefetch } = this.state;

    return (
      <GraphQLClientContext.Provider value={{ client, setRefetch, refetches }}>
        {super.render()}
      </GraphQLClientContext.Provider>
    );
  }
}
