import axios from 'axios';

export class GraphQLClient {
  axios;
  queries = {};

  constructor({ baseURL, headers }) {
    this.axios = axios.create({
      baseURL,
      headers,
    });
  }

  appendQuery = (key, { query, variables }) => {
    this.queries = {
      ...this.queries,
      [key]: {
        query,
        variables,
      },
    };
  };

  refetch = (key, refetch = false) => {
    this.queries = {
      ...this.queries,
      [key]: {
        ...this.queries[key],
        refetch,
      },
    };
  };

  query = ({ query, variables }) => {
    return this.axios.post('', {
      query,
      variables,
    });
  };

  mutate = ({ mutation, variables }) => {
    return this.axios.post('', {
      query: mutation,
      variables,
    });
  };
}

export default GraphQLClient;
