import React, {PropTypes} from 'react';
import BookListRow from './BookListRow';

const BookList = ({books}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      {books.map(book =>
        <BookListRow key={book.id} book={book}/>
      )}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
