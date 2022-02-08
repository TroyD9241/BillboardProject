async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { region: { contains: args.filter } },
          { artist: { contains: args.filter } },
        ],
      }
    : {}

  const tracks = await context.prisma.track.findMany({
    where,
  })
  return { tracks }
}

module.exports = {
  feed,
}
