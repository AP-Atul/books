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
