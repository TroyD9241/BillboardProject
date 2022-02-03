const { ApolloServer } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')

const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    info: () => `This is our api`,
    feed: async (parent, args, context) => {
      return context.prisma.track.findMany()
    },
  },
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
  resolvers,
  context: {
    prisma,
  },
})

server.listen().then(({ url }) => console.log(`server running on ${url}`))
