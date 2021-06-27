var { graphql, buildSchema } = require("graphql");

// データソース
const datas = {
  dogs: [
    { id: 10, name: "shiro", age: 5, friends: ["kuro", "toto"] },
    { id: 11, name: "toto", age: 10, friends: ["shiro"] },
    { id: 12, name: "kuro", age: 3, friends: ["kuro"] },
  ],
  hoge: [{ name: "wan1" }, { name: "wan2" }, { name: "wan3" }],
};

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Dog {
    name: String
  }
  type Query {
    hello(id: ID): [Dog]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return datas.hoge;
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, "{ hello }", root).then((response) => {
  console.log(response);
});
