import {
  taxonomies,
  taxonomy,
  createTaxonomy,
  updateTaxonomy,
  deleteTaxonomy,
} from './taxonomies'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('taxonomies', () => {
  scenario('returns all taxonomies', async (scenario) => {
    const result = await taxonomies()

    expect(result.length).toEqual(Object.keys(scenario.taxonomy).length)
  })

  scenario('returns a single taxonomy', async (scenario) => {
    const result = await taxonomy({ id: scenario.taxonomy.one.id })

    expect(result).toEqual(scenario.taxonomy.one)
  })

  scenario('creates a taxonomy', async () => {
    const result = await createTaxonomy({
      input: { name: 'String', updatedAt: '2022-05-22T18:57:46Z' },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual('2022-05-22T18:57:46Z')
  })

  scenario('updates a taxonomy', async (scenario) => {
    const original = await taxonomy({ id: scenario.taxonomy.one.id })
    const result = await updateTaxonomy({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a taxonomy', async (scenario) => {
    const original = await deleteTaxonomy({ id: scenario.taxonomy.one.id })
    const result = await taxonomy({ id: original.id })

    expect(result).toEqual(null)
  })
})
