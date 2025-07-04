export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  publicationDate: Date;
  addedDate: Date;
}

export interface AuthorBookCount {
  author: string;
  bookCount: number;
}