export const schema = gql`
  type Rate {
    id: Int!
    value: Float!
    currency: String!
    name: String
    type: String!
    material: String!
    modifiers: String
    unit: String!
    description: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    rates: [Rate!]! @requireAuth
    rate(id: Int!): Rate @requireAuth
  }

  input CreateRateInput {
    value: Float!
    currency: String!
    name: String
    type: String!
    material: String!
    modifiers: String
    unit: String!
    description: String
  }

  input UpdateRateInput {
    value: Float
    currency: String
    name: String
    type: String
    material: String
    modifiers: String
    unit: String
    description: String
  }

  type Mutation {
    createRate(input: CreateRateInput!): Rate! @requireAuth
    updateRate(id: Int!, input: UpdateRateInput!): Rate! @requireAuth
    deleteRate(id: Int!): Rate! @requireAuth
  }
`
