//import statements

const { ApolloServer } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')
const prisma = new PrismaClient()

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Track = require('./resolvers/Track')
// import to authenticate
const { getUserId } = require('./utils')

// Resolves queries
const resolvers = {
  Query,
  Mutation,
  User,
  Track,
}

// create an apollo server instance
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      // check if req and header auth if authenticated return the userId, else null
      userId: req && req.headers.authorization ? getUserId(req) : null,
    }
  },
})

// call server instance
server.listen().then(({ url }) => console.log(`server running on ${url}`))
