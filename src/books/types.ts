export interface Book {
  id: string
  title: string
  author: string
  isbn: string
  publication_date: string
  created_at: string
  updated_at: string
}

export interface CreateBook {
  title: string
  author: string
  isbn: string
  publication_date: string
}
