export const schema = gql`
  type Taxonomy {
    id: Int!
    name: String!
    slug: String
    type: String!
    description: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    taxonomies: [Taxonomy!]! @requireAuth
    taxonomy(id: Int!): Taxonomy @requireAuth
  }

  input CreateTaxonomyInput {
    name: String!
    slug: String
    type: String!
    description: String
  }

  input UpdateTaxonomyInput {
    name: String
    slug: String
    type: String
    description: String
  }

  type Mutation {
    createTaxonomy(input: CreateTaxonomyInput!): Taxonomy! @requireAuth
    updateTaxonomy(id: Int!, input: UpdateTaxonomyInput!): Taxonomy!
      @requireAuth
    deleteTaxonomy(id: Int!): Taxonomy! @requireAuth
  }
`
