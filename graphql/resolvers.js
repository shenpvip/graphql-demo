/*
 * @Author: shenpeng
 * @Date: 2019-02-21 19:59:24
 * @Last Modified by: shenpeng
 * @Last Modified time: 2019-02-22 00:15:15
 */
// 告诉graphql从哪里去取数据，并且描述对数据的处理

const todolist = require('../data.json') // 引入数据源
const resolvers = {
  Query: {
    hello: (parent, { name }, context, info) => {
      return 'hello ' + name
    },
    todolist: (parent, args, context, info) => {
      return todolist
    },
    item: (parent, { id }, context, info) => {
      return todolist.find(item => item.id == id)
    }
  },
  Mutation: {
    createItem: (parent, { id, item_name, status }, context, info) => {
      const newItem = { id, item_name, status }

      todolist.push(newItem)

      return newItem
    },
    updateItem: (parent, { id, item_name, status }, context, info) => {
      let newItem = todolist.find(item => item.id === id)

      newItem.item_name = item_name
      newItem.status = status

      return newItem
    },
    deleteItem: (parent, { id }, context, info) => {
      const itemIndex = todolist.findIndex(item => item.id === id)

      if (itemIndex === -1) throw new Error('todo not found.')

      const deletedItem = todolist.splice(itemIndex, 1)

      return deletedItem[0]
    }
  }
}

export default resolvers
