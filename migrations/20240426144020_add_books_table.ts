import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  const query = `
    create table if not exists
    public.books (
      id uuid not null default gen_random_uuid (),
      created_at timestamp with time zone not null default now(),
      updated_at timestamp with time zone null default now(),
      title text null,
      author text null,
      isbn text not null,
      publication_date timestamp with time zone null,
      constraint books_pkey primary key (id),
      constraint books_isbn_key unique (isbn)
    ) tablespace pg_default;

    create or replace function update_updated_at()
    returns trigger as
    $$      
    begin
     new.updated_at = now();
     return new;
    end;
    $$
    language 'plpgsql';

    create trigger books_updated
    before insert or update
    on books
    for each row
    execute procedure update_updated_at();
    
  `
  return knex.schema.raw(query)
}

export async function down(knex: Knex): Promise<void> {
  const query = `drop table if exists public.books cascade;`
  return knex.schema.raw(query)
}
