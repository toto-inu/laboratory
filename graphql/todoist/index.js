const { ApolloServer, gql } = require("apollo-server");
let { tasks } = require("./mock/tasks");

const typeDefs = gql`
  type Task {
    id: ID!
    doneFlag: Boolean!
    content: String!
    layer: Int!
    childIds: [Int!]
  }

  type Query {
    tasks: [Task]
    getActiveTask(done: Boolean): [Task]
  }
  type Mutation {
    updateTask(id: ID, done: Boolean): [Task]
    deleteTask(id: ID): [Task]
  }
`;

const resolvers = {
  Query: {
    tasks: () => {
      return tasks;
    },
    getActiveTask: (_, { done }) => {
      return tasks.filter((task) => task.doneFlag === done);
    },
  },
  Mutation: {
    updateTask: (_, { id, done }) => {
      const result = tasks.reduce(
        (acc, cur) => {
          if (String(cur.id) === id) {
            return {
              tasks: [...acc.tasks, { ...cur, doneFlag: done }],
              updatedTasks: [...acc.updatedTasks, { ...cur, doneFlag: done }],
            };
          }
          return {
            tasks: [...acc.tasks, { ...cur }],
            updatedTasks: [...acc.updatedTasks],
          };
        },
        { tasks: [], updatedTasks: [] }
      );
      tasks = result.tasks;
      return result.updatedTasks;
    },
    deleteTask: (_, { id }) => {
      const keyIndex = tasks.findIndex((task) => String(task.id) === id);
      if (keyIndex === -1) return null;

      const deletedTask = tasks[id];
      tasks = tasks.filter((task) => String(task.id) !== id);
      return deletedTask;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
