import { db } from 'src/lib/db'

export const sups = () => {
  return db.sup.findMany()
}

export const sup = ({ id }) => {
  return db.sup.findUnique({
    where: { id },
  })
}

export const createSup = ({ input }) => {
  return db.sup.create({
    data: input,
  })
}

export const updateSup = ({ id, input }) => {
  return db.sup.update({
    data: input,
    where: { id },
  })
}

export const deleteSup = ({ id }) => {
  return db.sup.delete({
    where: { id },
  })
}
