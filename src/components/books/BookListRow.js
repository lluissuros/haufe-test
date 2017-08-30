import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const BookListRow = ({book}) => {
  return (
    <tr>
      <td><a href={book.buyHref} target="_blank">Buy</a></td>
      <td><Link to={'/book/' + book.id}>{book.title}</Link></td>
      <td>{book.author}</td>
      <td>{book.ratingId}</td>
      <td>{book.description}</td>
    </tr>
  );
};

BookListRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookListRow;
