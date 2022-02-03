const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils.js')

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)

  const user = await context.prisma.user.create({ data: { ...args, password } })

  const token = jwt.sign({ userId: user.id }.APP_SECRET)

  return { token, user }
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user.findUnique({
    where: { username: args.username },
  })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid Password')
  }

  const token = jwt.sign({ user: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

module.exports = {
  login,
  signup,
}
