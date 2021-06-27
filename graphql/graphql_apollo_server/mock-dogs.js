// データソース
const dogs = [
  {
    __typename: "Dog",
    id: 10,
    name: "Shiro",
    weekForWalk: "MONDAY",
  },
  {
    __typename: "Dog",
    id: 11,
    name: "Kuro",
    age: 10,
    friendIds: [10],
    weekForWalk: "SUNDAY",
  },
  {
    __typename: "Dog",
    id: 13,
    name: "Pochi",
    age: 15,
    friendIds: [10],
    weekForWalk: "FRIDAY",
  },
];
const cats = [
  {
    __typename: "Cat",
    id: 10,
    name: "Shiro",
    weekForChuru: "MONDAY",
  },
  {
    __typename: "Cat",
    id: 11,
    name: "Kuro",
    age: 10,
    friendIds: [10],
    weekForChuru: "SUNDAY",
  },
  {
    __typename: "Cat",
    id: 13,
    name: "Pochi",
    age: 15,
    friendIds: [10],
    weekForChuru: "FRIDAY",
  },
];

module.exports.dogs = dogs;
module.exports.cats = cats;
