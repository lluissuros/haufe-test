// TODO: api url file with consts
const booksUrl = 'http://127.0.0.1:5000/Books';

class BookApi {
  static getAllBooks() {
    return fetch(`${booksUrl}`)
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
