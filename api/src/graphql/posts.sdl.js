export const schema = gql`
  type Post {
    id: Int!
    User: User
    authorId: Int
    postType: String!
    isSticky: Boolean!
    title: String!
    slug: String
    body: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    postPosts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    authorId: Int
    postType: String!
    isSticky: Boolean!
    title: String!
    slug: String
    body: String
  }

  input UpdatePostInput {
    authorId: Int
    postType: String
    isSticky: Boolean
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
