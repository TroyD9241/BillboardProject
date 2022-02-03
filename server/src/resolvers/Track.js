function userId(parent, args, context) {
  return context.prisma.findUnique({ where: { id: parent.id } }).userId()
}

module.exports = {
  userId,
}
