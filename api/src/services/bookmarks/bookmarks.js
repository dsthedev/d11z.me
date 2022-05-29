import { db } from 'src/lib/db'

export const bookmarks = () => {
  return db.bookmark.findMany()
}

export const bookmark = ({ id }) => {
  return db.bookmark.findUnique({
    where: { id },
  })
}

export const createBookmark = ({ input }) => {
  return db.bookmark.create({
    data: input,
  })
}

export const updateBookmark = ({ id, input }) => {
  return db.bookmark.update({
    data: input,
    where: { id },
  })
}

export const deleteBookmark = ({ id }) => {
  return db.bookmark.delete({
    where: { id },
  })
}
