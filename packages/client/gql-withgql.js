import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

import GraphQLClientContext from './gql-context';

export const withClient = options => ComposedComponent => {
  const { query = '', variables = {} } = options;
  const key = ComposedComponent.name;

  class GQLHoC extends React.Component {
    static contextType = GraphQLClientContext;

    refetch = (k = key) => this.context.setRefetch(k, true);
    doneRefetch = (k = key) => this.context.setRefetch(k, false);

    state = {
      data: null,
      loading: true,
      errors: null,
      refetch: this.refetch,
      mutation: null,
    };

    constructor(props, context) {
      super(props, context);

      this.context.client.appendQuery(key, {
        query,
        variables,
      });
    }

    componentDidMount() {
      this.query(this.context.client.queries[key]);
    }

    componentWillReceiveProps(nextProps, nextContext) {
      const isRefetch = nextContext.refetches[key];

      if (isRefetch) {
        this.query(this.context.client.queries[key]);
        this.doneRefetch();
      }
    }

    query = ({ query, variables }) => {
      this.context.client
        .query({ query, variables })
        .then(result =>
          this.setState({
            data: result.data.data,
            errors: result.data.errors || null,
            loading: false,
          }),
        )
        .catch(error =>
          this.setState({
            errors: [error],
            loading: false,
          }),
        );
    };

    mutate = ({ mutation, variables, refetch = false }) => {
      this.context.client
        .mutate({ mutation, variables })
        .then(result => {
          this.setState(
            {
              mutation: {
                data: result.data.data,
                errors: result.data.errors || null,
                loading: false,
              },
            },
            () => {
              if (typeof refetch === 'boolean') {
                refetch && this.refetch();
              }

              if (typeof refetch === 'string') {
                this.refetch(refetch);
              }
            },
          );
        })
        .catch(error =>
          this.setState({
            mutation: {
              errors: [error],
              loading: false,
            },
          }),
        );
    };

    render() {
      return (
        <ComposedComponent
          {...this.props}
          graphql={this.state}
          refetch={this.refetch}
          mutate={this.mutate}
        />
      );
    }
  }

  return hoistStatics(GQLHoC, ComposedComponent);
};

export default withClient;
