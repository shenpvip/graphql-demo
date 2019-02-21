/*
 * @Author: shenpeng
 * @Date: 2019-02-21 20:52:42
 * @Last Modified by: shenpeng
 * @Last Modified time: 2019-02-21 21:54:21
 */
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

// 组合对象类型和解析器，生成模拟GraphQL.js的schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
