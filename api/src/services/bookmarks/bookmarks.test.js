import {
  bookmarks,
  bookmark,
  createBookmark,
  updateBookmark,
  deleteBookmark,
} from './bookmarks'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bookmarks', () => {
  scenario('returns all bookmarks', async (scenario) => {
    const result = await bookmarks()

    expect(result.length).toEqual(Object.keys(scenario.bookmark).length)
  })

  scenario('returns a single bookmark', async (scenario) => {
    const result = await bookmark({ id: scenario.bookmark.one.id })

    expect(result).toEqual(scenario.bookmark.one)
  })

  scenario('creates a bookmark', async () => {
    const result = await createBookmark({
      input: { updatedAt: '2022-05-23T03:55:08Z' },
    })

    expect(result.updatedAt).toEqual('2022-05-23T03:55:08Z')
  })

  scenario('updates a bookmark', async (scenario) => {
    const original = await bookmark({ id: scenario.bookmark.one.id })
    const result = await updateBookmark({
      id: original.id,
      input: { updatedAt: '2022-05-24T03:55:08Z' },
    })

    expect(result.updatedAt).toEqual('2022-05-24T03:55:08Z')
  })

  scenario('deletes a bookmark', async (scenario) => {
    const original = await deleteBookmark({ id: scenario.bookmark.one.id })
    const result = await bookmark({ id: original.id })

    expect(result).toEqual(null)
  })
})
