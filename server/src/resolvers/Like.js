function user(parent, args, context) {
  return context.prisma.like.findUnique({ where: { id: parent.id } }).user()
}

function track(parent, args, context) {
  return context.prisma.track.findUnique({ where: { id: parent.id } }).track()
}

module.exports = {
  user,
  track,
}
