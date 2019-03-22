import React from 'react';
import Wrap from '@airy/maleo/wrap';

import GraphQLClient from './gql-client';
import GraphQLClientContext from './gql-context';

const client = new GraphQLClient({
  baseURL: 'http://localhost:4000/graphql',
});

export default class CustomWrap extends Wrap {
  render() {
    return (
      <GraphQLClientContext.Provider value={client}>
        {super.render()}
      </GraphQLClientContext.Provider>
    );
  }
}
