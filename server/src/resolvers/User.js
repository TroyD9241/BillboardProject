function favorites(parent, args, context) {
  return context.prisma.user
    .findUnique({ where: { id: parent.id } })
    .favorites()
}

module.exports = {
  favorites,
}
