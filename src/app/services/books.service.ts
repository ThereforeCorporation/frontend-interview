import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../types/book.type';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private books: Book[] = [
    {
      title: 'The Great Gatsby',
      id: 1,
      description:
        'A classic novel of American literature, depicting the dramatic intricacies of the Roaring Twenties.',
    },
    {
      title: '1984',
      id: 2,
      description:
        'A dystopian novel about totalitarianism, surveillance, and individuality.',
    },
    {
      title: 'To Kill a Mockingbird',
      id: 3,
      description: 'A powerful tale of racial injustice in the Deep South.',
    },
    {
      title: 'Pride and Prejudice',
      id: 4,
      description:
        'A romantic novel that critiques the British landed gentry at the turn of the 19th century.',
    },
    {
      title: 'The Hobbit',
      id: 5,
      description:
        'A fantasy novel that follows the quest of Bilbo Baggins and his journey to win a share of the treasure guarded by the dragon Smaug.',
    },
    {
      title: 'The Catcher in the Rye',
      id: 6,
      description:
        'A story about the complex life of a troubled teenager named Holden Caulfield.',
    },
    {
      title: 'The Alchemist',
      id: 7,
      description: "A philosophical book that inspires to follow one's dreams.",
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      id: 8,
      description:
        "The first book in the Harry Potter series, introducing the magical world and Harry's journey as a wizard.",
    },
    {
      title: 'Brave New World',
      id: 9,
      description:
        'A prophetic novel that anticipates a future of advanced technology and fundamental social change.',
    },
    {
      title: 'The Lord of the Rings',
      id: 10,
      description:
        'An epic high-fantasy novel that follows the quest to destroy the One Ring.',
    },
    {
      title: 'The Grapes of Wrath',
      id: 11,
      description:
        'A powerful narrative about the struggles of the poor and dispossessed during the Great Depression.',
    },
    {
      title: 'Moby-Dick',
      id: 12,
      description:
        "A novel about the voyage of the whaling ship Pequod and its captain's obsessive quest to kill the white whale, Moby-Dick.",
    },
    {
      title: 'Crime and Punishment',
      id: 13,
      description:
        'A psychological novel exploring the moral dilemmas of crime, guilt, and punishment.',
    },
    {
      title: 'The Catch',
      id: 14,
      description:
        'A thrilling story of espionage and the complexities of loyalty.',
    },
    {
      title: 'Invisible Man',
      id: 15,
      description:
        'A novel that delves into the social and intellectual issues faced by African Americans in the early 20th century.',
    },
    {
      title: "The Handmaid's Tale",
      id: 16,
      description:
        'A dystopian novel that explores themes of power, gender, and religious extremism.',
    },
    {
      title: 'The Da Vinci Code',
      id: 17,
      description:
        'A modern mystery thriller that integrates art history, religion, and conspiracy theories.',
    },
    {
      title: 'Sapiens: A Brief History of Humankind',
      id: 18,
      description:
        'A book that explores the history of the human species from the Stone Age to the modern day.',
    },
    {
      title: 'Life of Pi',
      id: 19,
      description:
        'A philosophical adventure novel about a young boy stranded on a boat in the Pacific Ocean with a Bengal tiger.',
    },
    {
      title: 'The Fault in Our Stars',
      id: 20,
      description:
        'A touching novel about teenagers falling in love while dealing with the challenges of cancer.',
    },
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  updateBook(book: Book): Observable<Book> {
    // Update books collection

    return of(book)
  }

}
