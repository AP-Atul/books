import * as hapi from '@hapi/hapi'

export const data = (h: hapi.ResponseToolkit, data: object): hapi.ResponseObject => {
  return h.response(data).code(200)
}

export const error = (h: hapi.ResponseToolkit, error: string): hapi.ResponseObject => {
  return h.response({ error }).code(400)
}

export const message = (
  h: hapi.ResponseToolkit,
  message: string
): hapi.ResponseObject => {
  return h.response({ message }).code(200)
}
