import joi from 'joi'

export const create = joi.object({
  title: joi.string().required(),
  author: joi.string().required(),
  isbn: joi.string().required(),
  publication_date: joi.date().iso()
})

export const list = joi.object({
  page: joi.number().default(1)
})
