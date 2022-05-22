export const schema = gql`
  type Post {
    id: Int!
    wpId: Int
    User: User
    authorId: Int
    parentId: Int
    postType: String!
    isSticky: Boolean!
    pStatus: String!
    title: String!
    slug: String
    body: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    postPosts: [Post!]! @skipAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    wpId: Int
    authorId: Int
    parentId: Int
    postType: String!
    isSticky: Boolean!
    pStatus: String!
    title: String!
    slug: String
    body: String
  }

  input UpdatePostInput {
    wpId: Int
    authorId: Int
    parentId: Int
    postType: String
    isSticky: Boolean
    pStatus: String
    title: String
    slug: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
