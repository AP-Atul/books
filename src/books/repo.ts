import db from '../db'
import type { Book, CreateBook } from './types'
const table = 'books'

export const create = async (book: CreateBook): Promise<Book | undefined> => {
  try {
    return await db<Book>(table)
      .insert(book)
      .returning('*')
      .then((rows) => rows[0])
  } catch (err) {
    return undefined
  }
}

export const get = async (id: string): Promise<Book | undefined> => {
  return await db<Book>(table).select('*').where('id', '=', id).first()
}

export const list = async (offset: number, limit = 10): Promise<Book[]> => {
  return await db<Book>(table).select('*').offset(offset).limit(limit)
}
