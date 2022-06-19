import { sups, sup, createSup, updateSup, deleteSup } from './sups'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sups', () => {
  scenario('returns all sups', async (scenario) => {
    const result = await sups()

    expect(result.length).toEqual(Object.keys(scenario.sup).length)
  })

  scenario('returns a single sup', async (scenario) => {
    const result = await sup({ id: scenario.sup.one.id })

    expect(result).toEqual(scenario.sup.one)
  })

  scenario('creates a sup', async () => {
    const result = await createSup({
      input: { name: 'String4146152', updatedAt: '2022-06-17T02:24:52Z' },
    })

    expect(result.name).toEqual('String4146152')
    expect(result.updatedAt).toEqual('2022-06-17T02:24:52Z')
  })

  scenario('updates a sup', async (scenario) => {
    const original = await sup({ id: scenario.sup.one.id })
    const result = await updateSup({
      id: original.id,
      input: { name: 'String50827542' },
    })

    expect(result.name).toEqual('String50827542')
  })

  scenario('deletes a sup', async (scenario) => {
    const original = await deleteSup({ id: scenario.sup.one.id })
    const result = await sup({ id: original.id })

    expect(result).toEqual(null)
  })
})
