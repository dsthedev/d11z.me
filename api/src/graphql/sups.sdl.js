export const schema = gql`
  type Sup {
    id: Int!
    manufacturer: String!
    productRef: String!
    name: String!
    collection: String
    type: String
    categories: String
    capsuleAmount: Int!
    servingSize: Int!
    wMeal: Boolean!
    caution: String
    ingredients: String
    otherIngredients: String
    proprietaryBlend: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    sups: [Sup!]! @requireAuth
    sup(id: Int!): Sup @requireAuth
  }

  input CreateSupInput {
    manufacturer: String!
    productRef: String!
    name: String!
    collection: String
    type: String
    categories: String
    capsuleAmount: Int!
    servingSize: Int!
    wMeal: Boolean!
    caution: String
    ingredients: String
    otherIngredients: String
    proprietaryBlend: String
  }

  input UpdateSupInput {
    manufacturer: String
    productRef: String
    name: String
    collection: String
    type: String
    categories: String
    capsuleAmount: Int
    servingSize: Int
    wMeal: Boolean
    caution: String
    ingredients: String
    otherIngredients: String
    proprietaryBlend: String
  }

  type Mutation {
    createSup(input: CreateSupInput!): Sup! @requireAuth
    updateSup(id: Int!, input: UpdateSupInput!): Sup! @requireAuth
    deleteSup(id: Int!): Sup! @requireAuth
  }
`
