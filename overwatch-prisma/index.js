const { prisma } = require('../generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // console.log(prisma);
  // const newUser = await prisma.createOwcharacter({ name: 'kenny', class: 'friendo'})
  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.owcharacters()
  console.log(allUsers)

  // Delete a character
  // const deleteChar = await prisma.deleteOverwatchPrisma({name: 'kenny'})
  // console.log('Character deleted');
}

main().catch(e => console.error(e))