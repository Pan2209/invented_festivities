import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy creatures
  const post1 = await prisma.invented_festivities.create({
data:{
    title: 'San Zurdo',
    description: 'Un dia enfocado en celebrar su santo al primer santo zurdo conocido',
    dayFest: 12,
    monthFest: 'Febrero',
    beginCountry: 'Italia',
    continent: 'Europa',
}


  })


  console.log({ post1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });  