const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)

  const user = await context.prisma.user.create({
    data: { ...args, password },
  })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user.findUnique({
    where: { username: args.username },
  })

  if (!user) {
    throw new Error('No user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid Password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function like(parent, args, context, info) {
  const { userId } = context
  console.log(userId)
  const newTrack = parseInt(args.trackId)
  console.log(newTrack)
  const like = await context.prisma.like.findUnique({
    where: {
      trackId_userId: {
        trackId: newTrack,
        userId: userId,
      },
    },
  })

  if (Boolean(like)) {
    throw new Error('Already favorited this')
  }

  const newLike = context.prisma.like.create({
    data: {
      user: { connect: { id: userId } },
      track: { connect: { id: Number(args.trackId) } },
    },
  })
  return newLike
}

module.exports = {
  signup,
  login,
  like,
}
