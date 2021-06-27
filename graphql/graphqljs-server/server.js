var { graphql, buildSchema } = require("graphql");

// データソース
const datas = {
  dogs: ["shiro", "toto", "kuro"],
};

// Construct a schema, using GraphQL schema language
// https://note.com/tkhm_dev/n/n83efc181f63d
// https://graphql.org/learn/schema/#scalar-types
// https://www.apollographql.com/docs/apollo-server/schema/unions-interfaces/#interface-type
var schema = buildSchema(`
  type Query {
    allDogs: [String!]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  allDogs: () => {
    return datas.dogs;
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, "{ allDogs }", root).then((response) => {
  console.log(response);
});

// 用語めっちゃわかりやすい
// https://docs.github.com/ja/graphql/guides/introduction-to-graphql
