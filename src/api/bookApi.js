import * as apiRoutes from './apiRoutes';
import "isomorphic-fetch";

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
      .then(fetchStatusHandler)
      .then(response => response.json())
      .catch(error => {
        throw(error);
      });
    }

    static deleteBook(bookId) {
      const request = new Request(`${apiRoutes.BOOKS}/${bookId}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
      });

      return fetch(request)
        .then(fetchStatusHandler)
        .catch(error => {
          throw(error);
        });
      }
}

function fetchStatusHandler(response) {
  if (response.status === 200) {
    return response;
  } else {
    throw new Error(response.statusText);
  }
}

export default BookApi;
