import joi from 'joi'

export const create = joi.object({
  title: joi.string().required(),
  author: joi.string().required(),
  isbn: joi.string().required(),
  publication_date: joi.date().iso().required()
})

export const list = joi.object({
  page: joi.number().default(1)
})

export const delete_ = joi.object({
  id: joi.string().uuid().required()
})

export const id = joi.object({
  id: joi.string().uuid().required()
})

export const update = joi.object({
  title: joi.string(),
  author: joi.string(),
  isbn: joi.string(),
  publication_date: joi.date().iso()
})
