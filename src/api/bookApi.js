import * as apiRoutes from './apiRoutes';

class BookApi {
  static getAllBooks() {
    return fetch(apiRoutes.GET_ALL_BOOKS)
      .then(response => response.json())
      .catch(error => {
        throw(error);
      });
  }

  static saveBook(book) {
    book = Object.assign({}, book); // to avoid manipulating object passed in.
  }

  static deleteBook(bookId) {
  }
}

export default BookApi;
