import { db } from 'src/lib/db'

export const clews = () => {
  return db.clew.findMany()
}

export const clew = ({ id }) => {
  return db.clew.findUnique({
    where: { id },
  })
}

export const createClew = ({ input }) => {
  return db.clew.create({
    data: input,
  })
}

export const updateClew = ({ id, input }) => {
  return db.clew.update({
    data: input,
    where: { id },
  })
}

export const deleteClew = ({ id }) => {
  return db.clew.delete({
    where: { id },
  })
}
