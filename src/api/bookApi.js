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
      .then(fetchStatusHandler)
      .then(response => response.json())
      .catch(error => {
        throw(error);
      });
    }

    static deleteBook(bookId) {
      //TODO
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
