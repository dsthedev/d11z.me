export const schema = gql`
  type Clew {
    id: Int!
    for: String!
    username: String
    email: String
    hint: String!
    symbols: String
    context: String
    loginURL: String
    licenseKey: String
    notes: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    clews: [Clew!]! @requireAuth
    clew(id: Int!): Clew @requireAuth
  }

  input CreateClewInput {
    for: String!
    username: String
    email: String
    hint: String!
    symbols: String
    context: String
    loginURL: String
    licenseKey: String
    notes: String
  }

  input UpdateClewInput {
    for: String
    username: String
    email: String
    hint: String
    symbols: String
    context: String
    loginURL: String
    licenseKey: String
    notes: String
  }

  type Mutation {
    createClew(input: CreateClewInput!): Clew! @requireAuth
    updateClew(id: Int!, input: UpdateClewInput!): Clew! @requireAuth
    deleteClew(id: Int!): Clew! @requireAuth
  }
`
