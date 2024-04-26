import * as hapi from '@hapi/hapi'
import * as handler from './handler'
import * as schema from './schema'

export const register = (server: hapi.Server): void => {
  server.route({
    method: 'post',
    path: '/books/create',
    options: {
      handler: handler.create,
      validate: {
        payload: schema.create
      },
      tags: ['api', 'books'],
      auth: false,
      description: 'Creates book entity and returns it as response',
      notes: 'May return error if book isbn already exists!'
    }
  })

  server.route({
    method: 'get',
    path: '/books/list',
    options: {
      handler: handler.list,
      validate: {
        query: schema.list
      },
      tags: ['api', 'books'],
      auth: false,
      description: 'List books based on pagination param',
      notes: 'If no page is passed, it will be set to 1'
    }
  })

  server.route({
    method: 'delete',
    path: '/books/delete/{id}',
    options: {
      handler: handler.delete_,
      validate: {
        params: schema.delete_
      },
      tags: ['api', 'books'],
      auth: false,
      description: 'Delete book for the given id',
      notes: 'If no id is passed, returns 404'
    }
  })

  server.route({
    method: 'put',
    path: '/books/update/{id}',
    options: {
      handler: handler.update,
      validate: {
        params: schema.id,
        payload: schema.update
      },
      tags: ['api', 'books'],
      auth: false,
      description: 'Delete book for the given id',
      notes: 'If no id is passed, returns 404'
    }
  })
}
