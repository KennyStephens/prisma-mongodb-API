const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // // Create a new user called `Alice`

  // console.log(prisma);
  const newUser = await prisma.createOverwatchPrisma({ name: 'kenny', class: 'support'})
  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.overwatchPrismas()
  console.log(allUsers)

  // Delete a character
  const deleteChar = await prisma.deleteOverwatchPrisma({name: 'kenny'})
  console.log('Character deleted');
}

main().catch(e => console.error(e))