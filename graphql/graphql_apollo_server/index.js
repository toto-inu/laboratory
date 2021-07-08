const { dogs, cats } = require("./mock-dogs.js");
const books = require("./mock-books.js");
const { ApolloServer, gql } = require("apollo-server");

// スキーマ
const typeDefs = gql`
  #
  type Book {
    id: ID!
    title: String
    pages: Int
    authors: [Author]
  }
  type Author {
    firstName: String
    lastName: String
  }
  type Query {
    books: [Book]
  }
  type Mutation {
    createBook: Book
  }
  type Subscription {
    subscriptBook: [Book]
  }
`;

// リゾルバー
const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    createBook: () => books,
  },
  Subscription: {
    subscriptBook: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4005 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}  ${server}`);
});
