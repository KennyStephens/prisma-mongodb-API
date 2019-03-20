const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // // Create a new user called `Alice`

  // console.log(prisma);
  const newUser = await prisma.createUser({ name: 'Kenny', weapons: 'slappies', quote: 'get slapped', class: 'slapper', imageUrl: 'https://www.kennystephens.com/img/kennystephens.1ae72e2e.gif' })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)
}

main().catch(e => console.error(e))