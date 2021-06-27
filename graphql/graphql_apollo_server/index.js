const { dogs, cats } = require("./mock-dogs.js");
const books = require("./mock-books.js");
const { ApolloServer, gql } = require("apollo-server");

// スキーマ
const typeDefs = gql`
  #
  enum Week {
    MONDAY
    TUESDAY
    WEDNESDAY
    THURSDAY
    FRIDAY
    SATURDAY
    SUNDAY
  }
  interface Pet {
    id: ID!
    name: String!
    age: Int
  }
  type Dog {
    id: ID!
    name: String!
    age: Int
    friendIds: [ID]
    weekForWalk: Week
  }
  type Cat {
    id: ID!
    name: String!
    age: Int
    weekForChuru: Week
  }
  union PetItem = Dog | Cat
  type Book {
    id: ID
    name: String
    authors: [Author]
  }
  type Author {
    name: String
  }
  type Query {
    allDog: [Dog]
    getDog(id: ID): [Dog]
    allBook: [Book]
    allPet: [PetItem]
  }
`;

// リゾルバー
const resolvers = {
  Query: {
    allDog: () => dogs,
    getDog: (_, args) => {
      return dogs.filter((dog) => {
        return dog.id == args.id;
      });
    },
    allBook: () => books,
    allPet: () => {
      return [...dogs, ...cats];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4005 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}  ${server}`);
});
