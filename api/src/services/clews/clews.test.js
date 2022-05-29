import { clews, clew, createClew, updateClew, deleteClew } from './clews'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('clews', () => {
  scenario('returns all clews', async (scenario) => {
    const result = await clews()

    expect(result.length).toEqual(Object.keys(scenario.clew).length)
  })

  scenario('returns a single clew', async (scenario) => {
    const result = await clew({ id: scenario.clew.one.id })

    expect(result).toEqual(scenario.clew.one)
  })

  scenario('creates a clew', async () => {
    const result = await createClew({
      input: { updatedAt: '2022-05-25T04:34:15Z' },
    })

    expect(result.updatedAt).toEqual('2022-05-25T04:34:15Z')
  })

  scenario('updates a clew', async (scenario) => {
    const original = await clew({ id: scenario.clew.one.id })
    const result = await updateClew({
      id: original.id,
      input: { updatedAt: '2022-05-26T04:34:15Z' },
    })

    expect(result.updatedAt).toEqual('2022-05-26T04:34:15Z')
  })

  scenario('deletes a clew', async (scenario) => {
    const original = await deleteClew({ id: scenario.clew.one.id })
    const result = await clew({ id: original.id })

    expect(result).toEqual(null)
  })
})
