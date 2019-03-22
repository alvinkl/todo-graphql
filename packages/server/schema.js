const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLEnumType,
} = require('graphql');

const STATUS = {
  TODO: 'TODO',
  ON_PROGRESS: 'ON_PROGRESS',
  DONE: 'DONE',
  BACKLOG: 'BACKLOG',
};

const STATUS_ENUMTYPE = Object.keys(STATUS).reduce(
  (p, c) => ({
    ...p,
    [c]: {
      value: STATUS[c],
    },
  }),
  {},
);

const GraphqlStatusEnum = new GraphQLEnumType({
  name: 'TodoStatusEnum',
  values: STATUS_ENUMTYPE,
});

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

const TodoType = new GraphQLObjectType({
  name: 'TodoType',
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    status: {
      type: GraphqlStatusEnum,
    },
    user: {
      type: UserType,
      resolve(parent, args) {
        const { userId } = parent;
        return _.find(users, { id: userId });
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    todos: {
      type: new GraphQLList(TodoType),
      resolve(parent, args) {
        const { todos: userTodos } = parent;
        return userTodos.map(todoId => _.find(todos, { id: todoId }));
      },
    },
  }),
});

const StatusType = new GraphQLObjectType({
  name: 'StatusType',
  fields: () => ({
    key: { type: GraphQLString },
    value: { type: GraphQLString },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    todos: {
      type: new GraphQLList(TodoType),
      resolve(parent, args) {
        return todos;
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users;
      },
    },
    backlogs: {
      type: new GraphQLList(TodoType),
      resolve(parent, args) {
        return _.filter(todos, { status: STATUS.BACKLOG });
      },
    },
    status: {
      type: new GraphQLList(StatusType),
      resolve(parent, args) {
        return Object.keys(STATUS).reduce(
          (p, c) => [
            ...p,
            {
              key: c,
              value: STATUS[c],
            },
          ],
          [],
        );
      },
    },
  }),
});

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: () => ({
    addBacklog: {
      type: TodoType,
      args: {
        description: {
          type: GraphQLString,
        },
        userId: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        const { description, userId } = args;

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

        return constructTodo;
      },
    },
    updateStatus: {
      type: TodoType,
      args: {
        id: { type: GraphQLID },
        status: {
          type: GraphqlStatusEnum,
        },
      },
      resolve(parent, args) {
        const { status, id } = args;
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

        return constructTodo;
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: MutationType,
});
