import db from '../db'
import type { Book, CreateBook, UpdateBook } from './types'
const table = 'books'

export const create = async (book: CreateBook): Promise<Book | undefined> => {
  return await db<Book>(table)
    .insert(book)
    .onConflict('isbn')
    .ignore()
    .returning('*')
    .then((rows) => rows[0])
}

export const get = async (id: string): Promise<Book | undefined> => {
  return await db<Book>(table).select('*').where('id', '=', id).first()
}

export const list = async (offset: number, limit = 10): Promise<Book[]> => {
  return await db<Book>(table).select('*').offset(offset).limit(limit)
}

export const update = async (id: string, book: UpdateBook): Promise<Book | undefined> => {
  return await db<Book>(table)
    .update(book)
    .where('id', '=', id)
    .onConflict('isbn')
    .ignore()
    .returning('*')
    .then((rows) => rows[0])
}

export const _delete = async (id: string): Promise<number> => {
  return await db<Book>(table).delete().where('id', '=', id)
}
