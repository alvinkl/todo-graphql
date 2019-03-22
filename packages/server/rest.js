let { users, todos, STATUS } = require('./data');

module.exports = function(app) {
  app.get('/api/todos', (req, res) => {
    res.send(todos);
  });

  app.get('/api/users', (req, res) => {
    res.send(users);
  });

  app.get('/api/status', (req, res) => {
    const mapStatus = Object.keys(STATUS).reduce(
      (p, c) => [
        ...p,
        {
          key: c,
          value: STATUS[c],
        },
      ],
      [],
    );

    res.send(mapStatus);
  });

  app.post('/api/add/backlog', (req, res) => {
    const { description, userId } = req.body;

    const uid = parseInt(userId);

    const newTodoId = todos[todos.length - 1].id + 1;
    const constructTodo = {
      userId: uid,
      description,
      id: newTodoId,
      status: STATUS.BACKLOG,
    };

    todos.push(constructTodo);

    const userIndex = users.findIndex(d => d.id === uid);
    users = [
      ...users.slice(0, userIndex),
      {
        ...users[userIndex],
        todos: [...users[userIndex].todos, newTodoId],
      },
      ...users.slice(userIndex + 1),
    ];

    res.send(constructTodo);
  });

  app.post('/api/update/status', (req, res) => {
    const { id, status } = req.body;

    const tId = parseInt(id);

    const todoIndex = todos.findIndex(t => t.id === tId);

    const constructTodo = {
      ...todos[todoIndex],
      status,
    };

    todos = [
      ...todos.slice(0, todoIndex),
      constructTodo,
      ...todos.slice(todoIndex + 1),
    ];

    res.send(constructTodo);
  });
};
