const STATUS = {
  TODO: 'TODO',
  ON_PROGRESS: 'ON_PROGRESS',
  DONE: 'DONE',
  BACKLOG: 'BACKLOG',
};

let todos = [
  {
    id: 1,
    description: 'Todo1',
    userId: 1,
    status: STATUS.TODO,
  },
  {
    id: 2,
    description: 'Todo2',
    userId: 1,
    status: STATUS.ON_PROGRESS,
  },
  {
    id: 3,
    description: 'Todo3',
    userId: 2,
    status: STATUS.DONE,
  },
  {
    id: 4,
    description: 'Todo4',
    userId: 4,
    status: STATUS.ON_PROGRESS,
  },
  {
    id: 5,
    description: 'Todo5',
    userId: 1,
    status: STATUS.BACKLOG,
  },
  {
    id: 6,
    description: 'Todo6',
    userId: 2,
    status: STATUS.BACKLOG,
  },
  {
    id: 7,
    description: 'Todo7',
    userId: 2,
    status: STATUS.BACKLOG,
  },
];

let users = [
  {
    id: 1,
    name: 'Andar',
    todos: [1, 2],
  },
  {
    id: 2,
    name: 'Andaaaaar',
    todos: [3],
  },
  {
    id: 3,
    name: 'Riaaaaaa',
    todos: [],
  },
  {
    id: 4,
    name: 'Riaaaasss',
    todos: [4],
  },
];

module.exports = {
  users,
  todos,
  STATUS,
};
