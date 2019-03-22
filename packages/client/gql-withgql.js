import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

import GraphQLClientContext from './gql-context';

export const withClient = options => ComposedComponent => {
  const { query = '', variables = {} } = options;

  class GQLHoC extends React.Component {
    static contextType = GraphQLClientContext;

    state = {
      data: null,
      loading: true,
      errors: null,
      refetch: this.refetch,
      mutation: null,
    };

    constructor(props, context) {
      super(props, context);
    }

    componentDidMount() {
      this.context.appendQuery({
        key: ComposedComponent.name,
        query,
        variables,
      });
      this.query({ query, variables });
      this.refetch = this.query.bind(null, { query, variables });
    }

    componentWillReceiveProps() {
      console.log(this.context);
    }

    refetch;

    query = ({ query, variables }) => {
      this.context
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
      this.context
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

              if (typeof refetch === 'object') {
                const { query, variables = {} } = refetch;
                this.query({ query, variables });
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
