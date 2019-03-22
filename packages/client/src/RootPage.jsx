import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  wrap: {
    textAlign: 'center',
  },
  linkList: {
    display: 'inline-block',
    margin: '0 10px',
    textDecoration: 'none',
    listStyleType: 'none',
    border: '1px solid black',
    padding: '10px',
    borderRadius: '20%',
  },
};

export default class RootPage extends React.Component {
  render() {
    return (
      <div style={style.wrap}>
        <h1>Todo App</h1>
        <ul>
          <li style={style.linkList}>
            <Link to="/">Todo</Link>
          </li>
          <li style={style.linkList}>
            <Link to="/backlog">Backlog</Link>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
