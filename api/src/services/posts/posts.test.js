import { posts, post, createPost, updatePost, deletePost } from './posts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('posts', () => {
  scenario('returns all posts', async (scenario) => {
    const result = await posts()

    expect(result.length).toEqual(Object.keys(scenario.post).length)
  })

  scenario('returns a single post', async (scenario) => {
    const result = await post({ id: scenario.post.one.id })

    expect(result).toEqual(scenario.post.one)
  })

  scenario('creates a post', async () => {
    const result = await createPost({
      input: { title: 'String', updatedAt: '2022-05-22T21:03:46Z' },
    })

    expect(result.title).toEqual('String')
    expect(result.updatedAt).toEqual('2022-05-22T21:03:46Z')
  })

  scenario('updates a post', async (scenario) => {
    const original = await post({ id: scenario.post.one.id })
    const result = await updatePost({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a post', async (scenario) => {
    const original = await deletePost({ id: scenario.post.one.id })
    const result = await post({ id: original.id })

    expect(result).toEqual(null)
  })
})
