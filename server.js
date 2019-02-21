/*
 * @Author: shenpeng
 * @Date: 2019-02-21 16:52:23
 * @Last Modified by: shenpeng
 * @Last Modified time: 2019-02-22 00:07:02
 */
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()

// 一个接口完成所有操作
app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.get('/', (req, res) => {
  res.end('index')
})

app.listen(8000, err => {
  if (err) {
    throw new Error(err)
  }
  console.log('*** server starting at port 8000 ***')
})
