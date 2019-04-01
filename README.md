## Overatch Prisma Surver

To start server just run the following: 
1. `Clone repo`
2. `cd into project folder`
3. `npm install`
4. `docker-compose up -d`
5. `npm start

or



Then go to localhost:4000 to test mutations

Here are some example queries and queries and mutations:

**GET QUERIES**
```
query getAllChars {
  owcharacters {
    _id
    name
    class
    quote
    imageUrl
    weapon
  }
}

query getCharByName {
  owcharacters(where: { name: "Zenyatta" }) {
    _id
    name
    quote
    weapon
    imageUrl
    class
  }
}

query getCharByClass {
  owcharacters(where: { class: "Support" }) {
    _id
    name
    quote
    weapon
    imageUrl
    class
  }
}
```

**MUTATIONS**
```
mutation createChar {
  createOwcharacter(data: { name: "Bob Bobberson" }) {
    name
  }
}

mutation deleteChar {
  deleteOwcharacter(where: { _id: "5c9be8f99bd116000763fc61" }) {
    _id
  }
}

mutation updateChar {
  updateOwcharacter(
    data: { name: "Super Kenny" }
    where: { _id: "5c97dbfa9bd116000757d5c4" }
  ) {
    name
  }
}

mutation upsertChar {
  upsertOwcharacter(
    where: { _id: "5c97dbfa9bd116000757d5c4" }
    update: { name: "SUPERSUPERKENNY" }
    create: { name: "SUPERSUPERKENNY" }
  ) {
    name
  }
}
```
