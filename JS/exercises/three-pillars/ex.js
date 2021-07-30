class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }
  addFavoriteBook(bookName) {
    if (!bookName.includes('Great')) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`Favorite Books: ${this.favoriteBooks.length}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  }
}

addingBooks = new Bookshelf();

function loadBooks(addingBooks) {
  fakeAjax(BOOK_API, function (books) {
    for (let book of books) addingBooks.addFavoriteBook(book);
    addingBooks.printFavoriteBooks();
  });
}

var BOOK_API = 'https://some.url/api';

loadBooks(addingBooks);
// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      'A Song of Ice and Fire',
      'The Great Gatsby',
      'Crime & Punishment',
      'Great Expectations',
      "You Don't Know JS",
    ]);
  }, 500);
}
