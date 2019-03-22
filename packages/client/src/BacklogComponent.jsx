import React from 'react';

import TodoList from './TodoList';

import withClient from '../gql-withgql';

const style = {
  wrap: {
    width: '100%',
  },
  list: {
    padding: 0,
    margin: 5,
    padding: 5,
    textAlign: 'center',
    border: '1px solid black',
  },
  formWrap: {
    width: '98%',
    border: '1px solid black',
    margin: 5,
    padding: 5,
    textAlign: 'center',
  },
  input: {
    margin: 5,
  },
};

export class BacklogComponent extends React.Component {
  state = {
    userId: 0,
    description: '',
  };

  handleChange = (key, event) => {
    this.setState({
      [key]: event.target.value,
    });
  };

  submitBacklog = () => {
    const { userId, description } = this.state;

    this.props.mutate({
      mutation,
      variables: {
        userId,
        description,
      },
      refetch: true,
    });
  };

  renderFormComponent = () => {
    const { userId, description } = this.state;
    const {
      graphql: {
        data: { users },
      },
    } = this.props;

    return (
      <div style={style.formWrap}>
        <span style={style.input}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            onChange={this.handleChange.bind(null, 'description')}
            value={description}
          />
        </span>
        <span style={style.input}>
          <label htmlFor="description">Assign to</label>
          <select
            onChange={this.handleChange.bind(null, 'userId')}
            value={userId}
          >
            <option value="0">Unassigned</option>
            {users.map(u => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </span>
        <span style={style.input}>
          <button onClick={this.submitBacklog}>Add</button>
        </span>
      </div>
    );
  };

  renderTodo = () => {
    const {
      graphql: { data },
    } = this.props;

    return <TodoList data={data.backlogs} wrapperStyle={style.list} />;
  };

  render() {
    const {
      graphql: { loading },
    } = this.props;

    if (loading) {
      return <div>Loading Backlogs...</div>;
    }

    return (
      <div style={style.wrap}>
        {this.renderTodo()}
        {this.renderFormComponent()}
      </div>
    );
  }
}

const query = `
  {
    backlogs {
      id
      description
      status
      user {
        name
      }
    }

    users {
      name
      id
    }
  }
`;

const mutation = `
  mutation addBacklog($userId: ID!, $description: String!) {
    addBacklog(userId: $userId, description: $description) {
      id
      description
      status
      user {
        name
      }
    }
  }
`;

export default withClient({
  query,
})(BacklogComponent);
