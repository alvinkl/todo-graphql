import React from 'react';
import withClient from '../gql-withgql';

const generateStyle = status => {
  let style = { listStyleType: 'none', border: '1px solid', margin: '5px' };

  if (status === 'BACKLOG') {
    style = {
      ...style,
      color: 'blue',
      borderColor: 'blue',
    };
  }

  if (status === 'DONE') {
    style = {
      ...style,
      color: 'green',
      borderColor: 'green',
    };
  }

  if (status === 'ON_PROGRESS') {
    style = {
      ...style,
      color: 'lightblue',
      borderColor: 'lightblue',
    };
  }

  return style;
};

export const ListTodoList = ({
  data,
  liStyle = {},
  selectStatus,
  updateStatus,
}) => (
  <li key={data.id} style={{ ...generateStyle(data.status), ...liStyle }}>
    <p>
      <strong>{data.description}</strong>
    </p>
    <select
      onChange={e => updateStatus({ id: data.id, status: e.target.value })}
      value={data.status}
    >
      <option />
      {selectStatus.map(d => (
        <option key={d.key} value={d.value}>
          {d.value}
        </option>
      ))}
    </select>
    <p>{data.user.name}</p>
  </li>
);

export const TodoList = props => {
  const {
    data,
    wrapperStyle = {},
    liStyle = {},
    graphql: { data: gqlData },
    mutate,
  } = props;

  return (
    <ul style={{ margin: 0, padding: 0, ...wrapperStyle }}>
      {data.map(d =>
        ListTodoList({
          data: d,
          liStyle,
          selectStatus: gqlData ? gqlData.status : [],
          updateStatus: ({ id, status }) =>
            mutate({
              mutation,
              variables: { id, status },
              refetch: true,
            }),
        }),
      )}
    </ul>
  );
};

const query = `
  {
    status {
      key
      value
    }
  }
`;

const mutation = `
  mutation ($id: ID!, $status: TodoStatusEnum!) {
    updateStatus(id: $id, status: $status) {
      id,
      description,
      status,
      user {
        name
      }
    }
  }
`;

export default withClient({ query })(TodoList);
