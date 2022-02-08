const fs = require('fs')
const path = require('path')
const { PrismaClient } = require('@prisma/client')
const { ApolloServer, PubSub } = require('apollo-server')
console.log(ApolloServer)
// import ApolloServer
const { getUserId } = require('./utils')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Like = require('./resolvers/Like')

const prisma = new PrismaClient()
console.log(PubSub)

const resolvers = {
  Query,
  Mutation,
  Like,
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      //   pubsub,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    }
  },
})

// simple implementation of the server, tells the server what operations should be accepted and how they should be resolved
server.listen().then(({ url }) => console.log(`server is running on ${url}`))

// typedefs -> resolver
