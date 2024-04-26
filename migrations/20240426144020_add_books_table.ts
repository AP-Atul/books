import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  const query = `SELECT 1 + 1;`
  return knex.schema.raw(query)
}

export async function down(knex: Knex): Promise<void> {
  const query = `SELECT 1 + 1;`
  return knex.schema.raw(query)
}
