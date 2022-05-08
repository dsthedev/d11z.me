import { db } from 'src/lib/db'

export const rates = () => {
  return db.rate.findMany()
}

export const rate = ({ id }) => {
  return db.rate.findUnique({
    where: { id },
  })
}

export const createRate = ({ input }) => {
  return db.rate.create({
    data: input,
  })
}

export const updateRate = ({ id, input }) => {
  return db.rate.update({
    data: input,
    where: { id },
  })
}

export const deleteRate = ({ id }) => {
  return db.rate.delete({
    where: { id },
  })
}
