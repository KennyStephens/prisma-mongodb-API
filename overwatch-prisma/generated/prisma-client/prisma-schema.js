module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.29.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  class: String
  weapons: String
  quote: String
  imageUrl: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  class: String
  weapons: String
  quote: String
  imageUrl: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  class_ASC
  class_DESC
  weapons_ASC
  weapons_DESC
  quote_ASC
  quote_DESC
  imageUrl_ASC
  imageUrl_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  class: String
  weapons: String
  quote: String
  imageUrl: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  class: String
  weapons: String
  quote: String
  imageUrl: String
}

input UserUpdateManyMutationInput {
  name: String
  class: String
  weapons: String
  quote: String
  imageUrl: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  class: String
  class_not: String
  class_in: [String!]
  class_not_in: [String!]
  class_lt: String
  class_lte: String
  class_gt: String
  class_gte: String
  class_contains: String
  class_not_contains: String
  class_starts_with: String
  class_not_starts_with: String
  class_ends_with: String
  class_not_ends_with: String
  weapons: String
  weapons_not: String
  weapons_in: [String!]
  weapons_not_in: [String!]
  weapons_lt: String
  weapons_lte: String
  weapons_gt: String
  weapons_gte: String
  weapons_contains: String
  weapons_not_contains: String
  weapons_starts_with: String
  weapons_not_starts_with: String
  weapons_ends_with: String
  weapons_not_ends_with: String
  quote: String
  quote_not: String
  quote_in: [String!]
  quote_not_in: [String!]
  quote_lt: String
  quote_lte: String
  quote_gt: String
  quote_gte: String
  quote_contains: String
  quote_not_contains: String
  quote_starts_with: String
  quote_not_starts_with: String
  quote_ends_with: String
  quote_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    