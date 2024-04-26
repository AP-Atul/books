import * as hapi from '@hapi/hapi'
import * as responses from '../responses'
import * as repo from './repo'
import { CreateBook } from './types'

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
