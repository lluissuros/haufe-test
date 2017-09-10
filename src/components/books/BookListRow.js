import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import EllipsedTextBox from '../common/EllipsedTextBox';

const BookListRow = ({book}) => {
  return (
    <tr>
      <td>{createBuyLink(book.buyHref)}</td>
      <td><Link to={'/book/' + book.id}>{book.title}</Link></td>
      <td>{book.author}</td>
      <td>{book.ratingId}</td>
      <td><EllipsedTextBox text={book.description}/></td>
    </tr>
  );
};

const createBuyLink = (buyHref) => {
  return buyHref
    ? <a href={buyHref} className="btn btn-info" target="_blank">Buy</a>
    : null;
};

BookListRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookListRow;
