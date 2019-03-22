import React from 'react';

import TodoList from './TodoList';

import withClient from '../gql-withgql';

const style = {
  wrap: {
    display: 'flex',
  },
  boardList: {
    display: 'inline-block',
    width: (100 - 5) / 3 + '%',
    height: 500,
    border: '1px solid black',
    padding: 5,
    textAlign: 'center',
    margin: 5,
  },
};

export class TodoComponent extends React.Component {
  renderTodo = () => {
    const {
      graphql: {
        data: { todos },
      },
    } = this.props;

    const data = todos.filter(t => t.status === 'TODO');

    return <TodoList data={data} mutateRefetch="TodoComponent" />;
  };

  renderOnProgress = () => {
    const {
      graphql: {
        data: { todos },
      },
    } = this.props;

    const data = todos.filter(t => t.status === 'ON_PROGRESS');

    return <TodoList data={data} mutateRefetch="TodoComponent" />;
  };

  renderDone = () => {
    const {
      graphql: {
        data: { todos },
      },
    } = this.props;

    const data = todos.filter(t => t.status === 'DONE');

    return <TodoList data={data} mutateRefetch="TodoComponent" />;
  };

  render() {
    const {
      graphql: { loading },
    } = this.props;

    if (loading) {
      return <div>Loading Todo ...</div>;
    }

    return (
      <div style={style.wrap}>
        <div style={style.boardList}>{this.renderTodo()}</div>
        <div style={style.boardList}>{this.renderOnProgress()}</div>
        <div style={style.boardList}>{this.renderDone()}</div>
      </div>
    );
  }
}

export default withClient({
  query: `
    {
      todos {
        id
        description
        status
        user {
          name
          id
        }
      }
    }
  `,
})(TodoComponent);
