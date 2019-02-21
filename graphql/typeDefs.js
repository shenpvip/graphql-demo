/*
 * @Author: shenpeng
 * @Date: 2019-02-21 19:56:10
 * @Last Modified by: shenpeng
 * @Last Modified time: 2019-02-21 22:00:15
 */
const typeDefs = `
  type TodoItem {
    id: ID!
    item_name: String!
    status: Boolean!
  }

  type Query {
    hello(name:String = "world"): String
    rollDice(numDice: Int!, numSides: Int): [Int]
    todolist: [TodoItem!]!
    item(id: ID!): TodoItem!
  }

  type Mutation {
    createItem(id: ID!, item_name: String!, status: Boolean!): TodoItem!
    updateItem(id: ID!, item_name: String, status: Boolean!): TodoItem!
    deleteItem(id: ID!): TodoItem!
  }
`
export default typeDefs
