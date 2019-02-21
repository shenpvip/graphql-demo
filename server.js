/*
 * @Author: shenpeng
 * @Date: 2019-02-21 16:52:23
 * @Last Modified by: shenpeng
 * @Last Modified time: 2019-02-21 22:27:09
 */
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'
import fetch from 'fetch'
const app = express()

// 一个接口完成所有操作
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.get('/demo', (req, res) => {
  var dice = 3
  var sides = 6
  var query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`
  let response = fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables: { dice, sides }
    })
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data))

  res.end(JSON.stringify(response))
})

app.listen(8000, err => {
  if (err) {
    throw new Error(err)
  }
  console.log('*** server starting at port 8000 ***')
})
