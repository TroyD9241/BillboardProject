const jwt = require('jsonwebtoken')
const APP_SECRET = 'mysecret'

function getTokenPayload(token) {
  return jwt.verify(token, APP_SECRET)
}

function getUserId(req, authToken) {
  if (req) {
    const authHeader = req.headers.authorization
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '')
      if (!token) {
        throw new Error('no token found')
      }
      const { userId } = getTokenPayload(authToken)
      return userId
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken)
    return userId
  }

  throw new Error('Not Authenticated')
}

module.exports = {
  APP_SECRET,
  getUserId,
}
