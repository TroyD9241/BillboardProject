const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const allTracks = await prisma.track.findMany()
  console.log(allTracks)
}

main()
  .catch((e) => {
    throw e
  })

  .finally(async () => {
    await prisma.$disconnect
  })
