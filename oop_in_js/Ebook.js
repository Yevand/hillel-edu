import Book from './Book.js';

export default class Ebook extends Book {
  constructor(bookTitle, author, bookYear, format) {
    super(bookTitle, author, bookYear);
    this._format = format;
  }

  get format() {
    return this._format;
  }

  set format(value) {
    if (!['pdf', 'ePub', 'fb2', 'doc'].includes(value)) {
      console.log('The format is incorrect or not supported');
      return;
    }

    return value;
  }

  describe() {
    console.log(`"${this._bookTitle}" book was written by ${this._author}. The year of publishing is ${this._bookYear}, format: ${this._format}.`);
  }

  static digitize(chosenBook, format) {
    return new Ebook(chosenBook.bookTitle, chosenBook.author, chosenBook.bookYear, format);
  }
}
