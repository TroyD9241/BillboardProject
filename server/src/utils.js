const jwt = require('jsonwebtoken')
const APP_SECRET = 'mysecret'

function getTokenPayload(token) {
  console.log('getTokenPayload----', token)
  return jwt.verify(token, APP_SECRET)
}

function getUserId(req, authToken) {
  console.log(req.body)
  if (req) {
    const authHeader = req.headers.authorization
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '')
      console.log('line15---', token)
      if (!token) {
        throw new Error('no token found')
      }
      const { userId } = getTokenPayload(token)
      console.log('userid------', userId)
      return userId
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken)
    console.log('userID====', userId)
    return userId
  }

  throw new Error('Not Authenticated')
}

module.exports = {
  APP_SECRET,
  getUserId,
}
