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

export const ListTodoList = ({ data, liStyle = {}, selectStatus }) => (
  <li style={{ ...generateStyle(data.status), ...liStyle }}>
    <p>
      <strong>{data.description}</strong>
    </p>
    <select>
      <option value={data.status}>{data.status}</option>
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
  } = props;

  console.log(props);

  return (
    <ul style={{ margin: 0, padding: 0, ...wrapperStyle }}>
      {data.map(d =>
        ListTodoList({
          data: d,
          liStyle,
          selectStatus: gqlData ? gqlData.status : [],
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

export default withClient({ query })(TodoList);
