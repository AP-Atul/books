import * as hapi from '@hapi/hapi'
import * as responses from '../responses'
import * as repo from './repo'
import { CreateBook, UpdateBook } from './types'

export const create = async (
  request: hapi.Request,
  h: hapi.ResponseToolkit
): Promise<hapi.ResponseObject> => {
  const result = await repo.create(request.payload as CreateBook)
  if (result) return responses.data(h, result)
  return responses.error(h, 'Error creating a new entry for book')
}

export const list = async (
  request: hapi.Request,
  h: hapi.ResponseToolkit
): Promise<hapi.ResponseObject> => {
  const page = request.query.page as number
  const limit = 10
  const offset = limit * (page - 1)
  const books = await repo.list(offset, limit)
  return responses.data(h, books)
}

export const delete_ = async (
  request: hapi.Request,
  h: hapi.ResponseToolkit
): Promise<hapi.ResponseObject> => {
  const payload = request.params as { id: string }
  const deletes = await repo._delete(payload.id)
  if (deletes > 0) return responses.message(h, 'Deleted successfully')
  return responses.notfound(h, 'No such entity found')
}

export const update = async (
  request: hapi.Request,
  h: hapi.ResponseToolkit
): Promise<hapi.ResponseObject> => {
  const params = request.params as { id: string }
  const updated = await repo.update(params.id, request.payload as UpdateBook)
  if (updated) return responses.data(h, updated)
  return responses.error(h, 'No such entity found or error updating')
}
