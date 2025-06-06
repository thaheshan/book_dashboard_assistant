import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book, AuthorBookCount } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '978-0-7432-7356-5',
      publicationDate: new Date('1925-04-10'),
      addedDate: new Date('2024-01-15')
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      isbn: '978-0-06-112008-4',
      publicationDate: new Date('1960-07-11'),
      addedDate: new Date('2024-01-10')
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      isbn: '978-0-452-28423-4',
      publicationDate: new Date('1949-06-08'),
      addedDate: new Date('2024-01-20')
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      isbn: '978-0-14-143951-8',
      publicationDate: new Date('1813-01-28'),
      addedDate: new Date('2024-01-05')
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      isbn: '978-0-316-76948-0',
      publicationDate: new Date('1951-07-16'),
      addedDate: new Date('2024-01-25')
    },
    {
      id: 6,
      title: 'Animal Farm',
      author: 'George Orwell',
      isbn: '978-0-452-28424-1',
      publicationDate: new Date('1945-08-17'),
      addedDate: new Date('2024-01-03')
    },
    {
      id: 7,
      title: 'Lord of the Flies',
      author: 'William Golding',
      isbn: '978-0-571-05686-2',
      publicationDate: new Date('1954-09-17'),
      addedDate: new Date('2024-01-08')
    },
    {
      id: 8,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      isbn: '978-0-06-085052-4',
      publicationDate: new Date('1932-08-30'),
      addedDate: new Date('2024-01-12')
    },
    {
      id: 9,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      isbn: '978-0-547-92822-7',
      publicationDate: new Date('1937-09-21'),
      addedDate: new Date('2024-01-18')
    },
    {
      id: 10,
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      isbn: '978-1-4516-7331-9',
      publicationDate: new Date('1953-10-19'),
      addedDate: new Date('2024-01-22')
    },
    {
      id: 11,
      title: 'Emma',
      author: 'Jane Austen',
      isbn: '978-0-14-143977-8',
      publicationDate: new Date('1815-12-23'),
      addedDate: new Date('2024-01-28')
    },
    {
      id: 12,
      title: 'Sense and Sensibility',
      author: 'Jane Austen',
      isbn: '978-0-14-143966-2',
      publicationDate: new Date('1811-10-30'),
      addedDate: new Date('2024-01-30')
    }
  ];

  getLatestBooks(count: number = 5): Observable<Book[]> {
    const sortedBooks = [...this.books]
      .sort((a, b) => b.addedDate.getTime() - a.addedDate.getTime())
      .slice(0, count);
    return of(sortedBooks);
  }

  getOldestBooks(count: number = 10): Observable<Book[]> {
    const sortedBooks = [...this.books]
      .sort((a, b) => a.addedDate.getTime() - b.addedDate.getTime())
      .slice(0, count);
    return of(sortedBooks);
  }

  getBooksByAuthor(): Observable<AuthorBookCount[]> {
    const authorCounts = this.books.reduce((acc, book) => {
      acc[book.author] = (acc[book.author] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    const result = Object.entries(authorCounts).map(([author, bookCount]) => ({
      author,
      bookCount
    }));

    return of(result);
  }
}