import { db } from 'src/lib/db'

export const taxonomies = () => {
  return db.taxonomy.findMany()
}

export const taxonomy = ({ id }) => {
  return db.taxonomy.findUnique({
    where: { id },
  })
}

export const createTaxonomy = ({ input }) => {
  return db.taxonomy.create({
    data: input,
  })
}

export const updateTaxonomy = ({ id, input }) => {
  return db.taxonomy.update({
    data: input,
    where: { id },
  })
}

export const deleteTaxonomy = ({ id }) => {
  return db.taxonomy.delete({
    where: { id },
  })
}
