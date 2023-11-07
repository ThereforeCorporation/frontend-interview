import { Injectable } from '@angular/core';
import { Book } from '../types/book.type';

@Injectable({ providedIn: 'root' })
export class BookshelfService {
  private books: Book[] = [];

  add(book: Book): void {
    this.books = [book, ...this.books];
  }
}
