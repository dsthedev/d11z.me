export const schema = gql`
  type Bookmark {
    id: Int!
    url: String!
    name: String!
    description: String
    isSticky: Boolean!
    keywords: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    bookmarks: [Bookmark!]! @skipAuth
    bookmark(id: Int!): Bookmark @skipAuth
  }

  input CreateBookmarkInput {
    url: String!
    name: String!
    description: String
    isSticky: Boolean!
    keywords: String
  }

  input UpdateBookmarkInput {
    url: String
    name: String
    description: String
    isSticky: Boolean
    keywords: String
  }

  type Mutation {
    createBookmark(input: CreateBookmarkInput!): Bookmark! @requireAuth
    updateBookmark(id: Int!, input: UpdateBookmarkInput!): Bookmark!
      @requireAuth
    deleteBookmark(id: Int!): Bookmark! @requireAuth
  }
`
