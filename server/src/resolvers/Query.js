function feed(parent, args, context) {
  return context.prisma.track.findMany()
}

module.exports = {
  feed,
}
