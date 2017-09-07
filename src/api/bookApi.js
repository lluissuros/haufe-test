import * as apiRoutes from './apiRoutes';

class BookApi {
  static getAllBooks() {
    return fetch(apiRoutes.BOOKS)
      .then(response => response.json())
      .catch(error => {
        throw(error);
      });
  }

  static saveBook(book) {
    const request = new Request(apiRoutes.BOOKS, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify( book )
    });

    return fetch(request)
      .then(response => response.json());
    }

    static deleteBook(bookId) {
      //TODO
    }
}

export default BookApi;
