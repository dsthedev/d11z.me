import { rates, rate, createRate, updateRate, deleteRate } from './rates'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('rates', () => {
  scenario('returns all rates', async (scenario) => {
    const result = await rates()

    expect(result.length).toEqual(Object.keys(scenario.rate).length)
  })

  scenario('returns a single rate', async (scenario) => {
    const result = await rate({ id: scenario.rate.one.id })

    expect(result).toEqual(scenario.rate.one)
  })

  scenario('creates a rate', async () => {
    const result = await createRate({
      input: {
        value: 6146876.115934792,
        type: 'String',
        material: 'String',
        unit: 'String',
        updatedAt: '2022-05-08T22:04:24Z',
      },
    })

    expect(result.value).toEqual(6146876.115934792)
    expect(result.type).toEqual('String')
    expect(result.material).toEqual('String')
    expect(result.unit).toEqual('String')
    expect(result.updatedAt).toEqual('2022-05-08T22:04:24Z')
  })

  scenario('updates a rate', async (scenario) => {
    const original = await rate({ id: scenario.rate.one.id })
    const result = await updateRate({
      id: original.id,
      input: { value: 6409449.147509794 },
    })

    expect(result.value).toEqual(6409449.147509794)
  })

  scenario('deletes a rate', async (scenario) => {
    const original = await deleteRate({ id: scenario.rate.one.id })
    const result = await rate({ id: original.id })

    expect(result).toEqual(null)
  })
})
